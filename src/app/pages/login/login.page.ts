import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuController, LoadingController, Platform, ModalController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecurityService } from '@services/security/security.service';
import { MESSAGE } from '@utils/constants/string/message';
import { DbService } from '@services/db/db.service';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { CONSTANT_NUMBERS } from '@utils/constants/constant-numbers';
import { Storage } from '@ionic/storage';
import { TermsConditionPage } from '@pages/login/terms-condition/terms-condition.page';
import { LoginApiService } from '@services/api/login.api.service';
import { AuthService } from '@services/auth/auth.service';
import { ROUTES } from '@utils/constants/route/routes';
import { UtilService } from '@services/util/util.service';
import { CoreSyncService, CoreApiService, ProcessQueueService } from '@core/services';
import { NetworkService } from '@services/network/network-service.service';
import { SettingsService } from '@services/settings/settings.service.service';
import { AppService } from '@services/app/app.service';
import { utilService } from '@services/util/util.service';
import { ApplicationNumberService, ReferrorService } from '@core/services'
import { AccountManagerResponseItem } from '@models/account-manager/account-manager';
import moment from 'moment';
import { AwsClientService } from 'app/core/services/aws-client/aws-client.service';
import { FirebaseClientService } from 'app/core/services/agila-firebase/firebase-client/firebase-client.service';
import { AlertService } from '@services/alert/alert.service';
import { CHANNEL } from '@utils/enums/channel';
import { PasswordChangeResetModalComponent } from '@components/modals/password-change-reset-modal/password-change-reset-modal.component';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { MODULE } from '@utils/enums/module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('content', { static: false }) nav;
  type = 'password';
  showPassword = false;
  isFormDisabled = false;
  changeResetPwDisabled = false;
  userName = '';
  password = '';
  errData = {
    userName: '',
    password: '',
    message: ''
  };
  buttonText = 'Login';
  usernameClass = 'az-login__usernameInput';
  passwordClass = 'az-login__customInput';
  usernameIsFocused = false;
  passwordIsFocused = false;
  isNetworkAvailable = false;
  hasLoggedIn = true;
  isOfflineLocked;
  subscription: Subscription;
  isDBReady = false;
  dtLastLoginDate: Date;
  backButtonSub: Subscription;
  versionCode: string | number;
  versionNumber: string;
  currentEnvironment: string = environment.envCode;
  usernameAuth: string;
  isUpdatedJourneyLoggedIn: boolean;

  constructor(
    private databaseService: DbService,
    private securityService: SecurityService,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private modalCtrl: ModalController,
    private loginApi: LoginApiService,
    private authservice: AuthService,
    private utils: UtilService,
    private syncService: CoreSyncService,
    private syncApiService: CoreApiService,
    public networkService: NetworkService,
    private settingsService: SettingsService,
    private appService: AppService,
    private utilService: UtilService,
    private offAppNumService: ApplicationNumberService,
    private awsClientService: AwsClientService,
    private fbClient: FirebaseClientService,
    private alertService: AlertService,
    private refferorService: ReferrorService,
    private processQueueService: ProcessQueueService,
  ) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.menu.enable(false);
      this.isNetworkAvailable = navigator.onLine;
      this.networkSubscriber();
      this.setupDB();
      this.getVersion();
    });
  }

  ngAfterViewInit() {
    const priority = 10000;
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(priority,
      () => this.onBack()
    );
  }

  private onBack() {
    // override back button here
    navigator['app'].exitApp();
  }

  async setupDB() {
    await this.databaseService.setDB();
    this.subscription = this.databaseService.getDatabaseState().subscribe(async isDBReady => {
      this.isDBReady = isDBReady;
      if (isDBReady) {
        await this.getLastLoginDetails();
        this.validateEmptyUsername();
      }
    });
  }

  async getLastLoginDetails() {
    try {
      this.hasLoggedIn = await this.authservice.getIfLoggedIn();
      if (this.hasLoggedIn) {
        this.userName = await this.storage.get(SETTING_KEYS.USERNAME);
        this.dtLastLoginDate = new Date(await this.storage.get(SETTING_KEYS.LASTLOGIN_TIMESTAMP));
        this.isOfflineLocked = await this.authservice.getIfOfflineLocked;
      }
    } catch {
      this.authservice.clearLoginValsFromStorage();
      this.hasLoggedIn = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.backButtonSub.unsubscribe();
  }

  // CLICKS LOGIN
  async login() {
    //this.utils.logger(LOGTYPE.btnClick, `Button Name: LOGIN`)
    if ((this.userName.trim() !== '') && (this.password.trim() !== '')) {
      // FIRST TIME
      if (!this.hasLoggedIn) {
        if (this.isNetworkAvailable) {
          // ONLINE
          this.openTandCModal();
        } else {
          // OFFLINE
          this.errData.message = MESSAGE.FIRST_LOGIN_CONNECTION;
          return false;
        }
      } else {
        // NOT FIRST TIME
        this.isUpdatedJourneyLoggedIn = await this.storage.get(KEYS.UPDATED_JOURNEY_FIRST_LOGIN_ATTEMPT);
        if (this.isNetworkAvailable) {
          // ONLINE
          await this.onlineLogin(this.userName, this.password);
          const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
          const token = await this.storage.get(SETTING_KEYS.TOKEN);
          if(this.appService.getUserLoggedIn() || token) {
            await this.utilService.cleanMobileTaggingRecordIfBelowDataPatch();
            await this.offAppNumService.setOfflineApplicationNumber(accountManagerID, token);
          }
        } else {
          // OFFLINE
          if(!this.isUpdatedJourneyLoggedIn) {
            if(this.isUpdatedJourneyLoggedIn == null) {
              this.utilService.infoAlert('Please login online to refresh your data.');
            } else {
              this.utilService.infoAlert('Updated version: Please login online to refresh your data.');
            }
            return;
          } else {
            const lastVersion = await this.storage.get(KEYS.LAST_APP_VERSION);
            if(lastVersion !== this.versionNumber) {
              this.utilService.infoAlert('Updated version: Please login online to refresh your data.');
            } else {
              this.offlineLogin(this.password);
            }
          }
        }
      }
    } else {
      this.errData.message = MESSAGE.NO_CREDENTIALS;
    }
  }

  async offlineLogin(password: string) {
    const activeChannel = await this.storage.get(SETTING_KEYS.CHANNEL);
    this.utilService.addStep(`Offline login ${activeChannel}`);
    try {

      // If locked by webservices:
      this.isOfflineLocked = await this.authservice.getIfOfflineLocked();
      if (this.isOfflineLocked) {
        this.errData.message = MESSAGE.ACCOUNT_LOCKED;
        return;
      }

      // If seven days has passed from last online login:
      const days = 7;
      const hasSevenDaysPassed = await this.authservice.checkDaysSinceLastLogin(days);
      if (hasSevenDaysPassed) {
        this.errData.message = MESSAGE.ERROR_SEVEN_DAYS;
        return;
      }

      // If offline login with invalid credentials more than 3x:
      const hasExceededInvalidOfflineLogins = await this.authservice.getIfExceededInvalidOfflineLogins();
      if (hasExceededInvalidOfflineLogins) {
        await this.authservice.updateInvalidOfflineLoginCount();
        this.errData.message = MESSAGE.EXCEEDED_INVALID_OFFLINE_LOGINS;
        return;
      }

      const isOfflineAuthenticated = await this.authservice.doOfflineLogin(password);
      if (isOfflineAuthenticated) {
        await this.authservice.resetInvalidOfflineLoginCount();
        this.errData.message = '';
        const alert = await this.alertService.displayAlert(MESSAGE.OFFLINE_LOGIN_SUCCESS, 
          'OK',
          ()=> {
            this.router.navigate(['/' + ROUTES.SPLASH]);
          });
        alert.present();
        this.password = '';
        const isloading = await this.loadingCtrl.getTop();
        if(isloading) {
          this.loadingCtrl.dismiss();
        }
        await this.utilService.cleanMobileTaggingRecordIfBelowDataPatch();
        await this.offAppNumService.setOfflineApplicationNumber();
        await this.settingsService.initializeJourneyGlobalData();
        this.appService.setUserLoggedIn(true);
      } else {
        await this.authservice.updateInvalidOfflineLoginCount();
        this.errData.message = MESSAGE.INVALID_OFFLINE_CREDENTIALS;
      }
    } catch (err) {
      this.errData.message = MESSAGE.ERROR_GENERIC;
      this.loadingCtrl.dismiss();
    }
  }

  // ONLINE LOGIN
  async onlineLogin(username: string, password: string) {
    try {
      // First, check if online
      if (!this.isNetworkAvailable) {
        this.errData.message = MESSAGE.ERROR_NO_NETWORK;
        return;
      }

      // checks if database is ready
      if (!this.isDBReady) {
        this.errData.message = MESSAGE.ERROR_SQL_INITIALIZATION;
        return;
      }

      // set initial UI-related vars
      this.errData.message = '';
      this.isOfflineLocked = false;

      // Check certificate
      const securityResponse = await this.securityService.validateCertificate();
      this.utilService.logInsert(securityResponse, 1, 'Certificate');
      if (securityResponse !== CONSTANT_NUMBERS.API_OK_STR && securityResponse !== CONSTANT_NUMBERS.API_OK_NEWRES_STR) {
        this.errData.message = MESSAGE.INVALID_CERTIFICATE;
        return;
      }

      // Commence online login
      const token = await this.getToken(username, password);
      username = this.usernameAuth;
      if (token) {

        // first of all, reset invalid offline login counter and remove offline lock
        await this.authservice.resetInvalidOfflineLoginCount();
        await this.storage.set(SETTING_KEYS.LOCKED_OFFLINE, false);

        let settingsAge = await this.storage.get('settingsAge');
        let settingsDuration = 0;
        if (!!settingsAge && settingsAge != "undefined")
          settingsDuration = moment.duration(moment().diff(moment(settingsAge))).asMinutes();
        else
          await this.storage.set('settingsAge', this.utilService.getCurrentTimeStamp());
        //console.log("settingsDuration::", settingsDuration)

        let accountManagerID: string;
        accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
        if (accountManagerID === '' || accountManagerID === null) {
          // accountManagerID is important for other API requests. Do not allow to proceed dash without it.
          await this.storage.set(SETTING_KEYS.INITIAL_LOGGED_IN, true);
          // first time online login
          accountManagerID = await this.getAccountManagerData(username, token);
          if (accountManagerID) {
            await this.getSettings(accountManagerID, token, false);
            if(!this.isUpdatedJourneyLoggedIn) {
              this.utilService.dynamicLoadingMessage(MESSAGE.PLEASE_DONT_CLOSE_AFTER_UPDATE);
              await this.storage.set(KEYS.UPDATED_JOURNEY_FIRST_LOGIN_ATTEMPT, true);
            }
          } else {
            this.errData.message = MESSAGE.NO_ACCOUNTMANAGER_ID;
            this.loadingCtrl.dismiss();
            return;
          }
        } else {
          // has already logged online in before
          await this.storage.set(SETTING_KEYS.INITIAL_LOGGED_IN, false);
          await this.restoreAccountManagerData(username, token);
          await this.getSettings(accountManagerID, token, false);
          await this.storage.set(KEYS.UPDATED_JOURNEY_FIRST_LOGIN_ATTEMPT, true);
          // this.syncService.fullSyncAllModules();
          // if settings age is greater than 30 minutes the app will update the managers and settings
          if (settingsDuration > 30) { //30 mins
            await this.storage.set('settingsAge', this.utilService.getCurrentTimeStamp());
          } else {
            //console.log('getAccountManagerData data is updated');
          }

        }
        await this.settingsService.initializeJourneyGlobalData();
        this.syncApiService.setAuth();
        this.loadingCtrl.dismiss();
        this.appService.setApplicationIdleTime();
        this.password = '';
        this.appService.setUserLoggedIn(true);
        await this.storage.set(KEYS.LAST_APP_VERSION, this.versionNumber);
        this.router.navigate(['/' + ROUTES.SPLASH]);
        const activeChannel = await this.storage.get(SETTING_KEYS.CHANNEL);
        this.utilService.addStep(`Online login ${activeChannel}`);
      }

    } catch (error) {
      this.loadingCtrl.dismiss();
      throw {
        message: 'Login error'
      };
    }
  }

  // gets and stores login data, returns true if login is successful
  async getToken(username: string, password: string): Promise<string> {
    const loader = await this.loadingCtrl.create({
      message: MESSAGE.ONLINE_LOGIN
    });
    try {
      loader.present();
      const loginResponseData = await this.loginApi.onlineLoginRequest(username.trim(), password.trim());
      this.utilService.logInsert(loginResponseData, 1, 'OnlineLoginAPI');
      if (loginResponseData.status === CONSTANT_NUMBERS.API_ACCEPTED) {
        if (!!environment.awsEnabled){
          this.awsClientService.retrieveAWSCredentials(JSON.parse(loginResponseData.data));
        }  
        await this.authservice.setLoginData(username, password, loginResponseData);
        const loginData = JSON.parse(loginResponseData.data).data;
        const { firebase, token, user } = loginData;

        if (!!environment.firebaseEnabled && firebase && firebase.token) {
          await this.fbClient.signInFirebase(firebase.token);
          console.log('token')
          console.log({ firebase, token, user });
        }

        this.usernameAuth = user.email;
        return token;
      } else if (loginResponseData.status === CONSTANT_NUMBERS.CONNECTION_TIMEOUT) {
        loader.dismiss();
        this.errData.message = MESSAGE.CONNECTION_TIMEOUT;
        return null;
      } else {
        this.handleOnlineLoginError(loginResponseData);
        loader.dismiss();
        return null;
      }
    } catch (error) {
      this.handleOnlineLoginError(error);
      loader.dismiss();
      return null;
    }
  }

  // restores the accountmanager for intermediary license update 
  async restoreAccountManagerData(username: string, token: string) {
    const accountManagerResponse = await this.loginApi.accountManagerAPIRequest(username, token);
    this.utilService.logInsert(accountManagerResponse, 1, 'accountManagerAPI');
    await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_DATA, accountManagerResponse);
  }

  // sets accountmanager response, return accountmanagerID
  async getAccountManagerData(username: string, token: string): Promise<string> {
    try {
      this.utilService.dynamicLoadingMessage(MESSAGE.ACCOUNT_MANAGER);
      let accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      const accountManagerResponse = await this.loginApi.accountManagerAPIRequest(username, token)
        .then((e) => {
          this.utilService.logInsert(e, 1, 'accountManagerAPI');
          this.authservice.authUser$.next(new AccountManagerResponseItem(JSON.parse(e.data)[0]));
          return e
        });
      await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_DATA, accountManagerResponse);
      const firstName = JSON.parse(accountManagerResponse.data)[0].firstName;
      const middleName = JSON.parse(accountManagerResponse.data)[0].middleName;
      const lastName = JSON.parse(accountManagerResponse.data)[0].name;
      const agentName = `${lastName}, ${firstName} ${middleName ? middleName : ''}`;
      await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_AGENT_NAME, agentName);
      accountManagerID = JSON.parse(accountManagerResponse.data)[0].self;
      await this.storage.set(SETTING_KEYS.ACCOUNT_MANAGER_ID, accountManagerID);
      return accountManagerID;
    } catch (err) {
      this.utilService.dynamicLoadingMessage('Get account manager error');
      this.loadingCtrl.dismiss();
      throw {
        message: 'Get account manager error'
      };
    }
  }

  async getSettings(accountManagerID: string, token: string, loading: boolean) {
    try {
      this.utilService.dynamicLoadingMessage('Getting default list of values...');
      const settings = await this.loginApi.getSystemAPIRequest(accountManagerID, token);
      this.utilService.logInsert(settings, 1, 'getSystemAPI');
      await this.storage.set(SETTING_KEYS.SETTINGS_DATA, settings);
      await this.processReferrorRequest(accountManagerID, token);
      const backUpSettings = await this.storage.get(SETTING_KEYS.BCK_UP_SETTINGS_DATA);
      if(!backUpSettings) {
        await this.storage.set(SETTING_KEYS.BCK_UP_SETTINGS_DATA, settings);
      }

      // for Leads ans SI, break down response data and store on separate ionic storage keys.
      await this.settingsService.initializeJourneyGlobalData();
      await this.offAppNumService.appNumberStoredClear();
    } catch (error) {
      this.utilService.dynamicLoadingMessage('Get settings error');
      this.loadingCtrl.dismiss();
      throw {
        message: 'Get settings error'
      };
    }
  }

  async doFullSync() {
    try {
      this.utilService.dynamicLoadingMessage(CONSTANTS_STRING.FULLSYNC_INITIATE);
      await this.syncService.fullSyncAllModules();
    } catch (err) {
      this.utilService.dynamicLoadingMessage('sync error');
      this.loadingCtrl.dismiss();
      throw {
        message: 'sync error'
      };
    }
  }

  async openPasswordChangeResetModal() {
    if (this.isNetworkAvailable) {
      const securityResponse = await this.securityService.validateCertificate();
      if (securityResponse !== CONSTANT_NUMBERS.API_OK_STR && securityResponse !== CONSTANT_NUMBERS.API_OK_NEWRES_STR) {
        this.utils.toastBottomAlert(MESSAGE.INVALID_CERTIFICATE);
        return;
      }

      const initPasswordAlert = await this.alertService.displayAlert(
        'This will initiate a request to change password of the indicated account.',
        'OK',
        async () => {
          const initLoader = await this.loadingCtrl.create({
            message: 'Initiating password change.'
          });

          try {
            await initLoader.present();
            const resetPwResponseData = await this.loginApi.resetPasswordRequest(this.userName.trim());
            if(JSON.parse(resetPwResponseData.data).meta.code !== CONSTANT_NUMBERS.API_OK) {
                initLoader.dismiss();
                this.utils.toastBottomAlert(MESSAGE.PASSWORD_RESET_REQUEST_ERROR);
                return;
            }

            initLoader.dismiss();
            const isloading = await this.loadingCtrl.getTop();
            if(isloading) {
              this.loadingCtrl.dismiss();
            }

            const modal = await this.modalCtrl.create({
              component: PasswordChangeResetModalComponent,
              showBackdrop: true,
              backdropDismiss: false,
              componentProps: {
                userName: this.userName,
                modalCtrl: this.modalCtrl
              },
              cssClass: 'password-change-reset-modal'
            });

            return await modal.present();
          } catch (err) {
            this.utils.toastBottomAlert(MESSAGE.PASSWORD_RESET_REQUEST_ERROR);
          }
        },
        'Cancel'
      );

      initPasswordAlert.present();

    } else this.utils.toastBottomAlert(MESSAGE.ERROR_NO_NETWORK);
  }

  async handleOnlineLoginError(responseData) {
    try {
      // TODO: Refactor this whole thing!
      const loginError = `You provided ${!this.hasLoggedIn ? 'either an invalid username or' : 'an invalid'} password. Please try again.`;
      const isJSON = this.utilService.jsonValidator(responseData.error);
      let metaCode = null, 
      errorData = null;
      if(isJSON) {
        errorData = JSON.parse(responseData.error);
        metaCode = errorData.meta.code;
        this.utilService.logInsert(responseData, 1, 'LOGIN');
      }
      if (responseData.status === CONSTANT_NUMBERS.UNAUTHORIZED) {
        // 3 invalid unauthorized logins will also lock you for offline login!
        await this.authservice.updateInvalidOfflineLoginCount();
        if (metaCode === CONSTANT_NUMBERS.CUSTOM_ERROR1) {
          this.errData.message = loginError;
        } else if (metaCode === CONSTANT_NUMBERS.CUSTOM_ERROR2) {
          this.errData.message = MESSAGE.ACCOUNT_LOCKED;
          await this.storage.set(SETTING_KEYS.LOCKED_OFFLINE, true);
        } else if (metaCode === CONSTANT_NUMBERS.EXPIRED_PW) {
          this.errData.message = MESSAGE.EXPIRED_PASSWORD;
        } else if (metaCode === CONSTANT_NUMBERS.UNAUTHORIZED_610) {
          this.errData.message = `Unauthorized access. Error code: ${metaCode}`;
        } else {
          this.errData.message = `${errorData.meta.message} Error code: ${metaCode}`;
        }
        this.usernameClass = 'az-login__usernameInput az-login__error';
        this.passwordClass = 'az-login__customInput az-login__error';
        this.isFormDisabled = true;
      } else if(responseData.status === CONSTANT_NUMBERS.CONNECTION_TIMEOUT) {
        this.errData.message = MESSAGE.CONNECTION_TIMEOUT;
      } else {
        if (responseData.status === CONSTANT_NUMBERS.LOCKED) {
          this.errData.message = loginError;
          this.usernameClass = 'az-login__usernameInput az-login__error';
          this.passwordClass = 'az-login__customInput az-login__error';
          this.isFormDisabled = true;

          await this.storage.set(SETTING_KEYS.LOCKED_OFFLINE, true);
          this.isOfflineLocked = true;
        } else {
          if (responseData.status === CONSTANT_NUMBERS.BAD_REQUEST) {
            this.errData.message = loginError;
            this.usernameClass = 'az-login__usernameInput az-login__error';
            this.passwordClass = 'az-login__customInput az-login__error';
            this.isFormDisabled = true;
          }
        }
      }
      //this.utilService.logger(LOGTYPE.error, this.errData.message)
      this.loadingCtrl.dismiss();
    } catch (error) {
      this.loadingCtrl.dismiss();
      throw {
        message: 'WS login error'
      };
    }
  }

  toggleViewPassword() {
    if (this.type === 'password') {
      this.type = 'text';
      this.showPassword = true;
    } else {
      this.type = 'password';
      this.showPassword = false;
    }
    if (this.errData.userName) {
      this.isFormDisabled = true;
    }
  }

  handleBlur(event, name) {
    if (name === 'userName') {
      this.usernameIsFocused = false;
      this.fieldValidation('userName');
    } else {
      this.passwordIsFocused = false;
      this.fieldValidation('password');
    }
  }

  fieldValidation(field) {
    if (field === 'userName') {
      this.validateUserName();
    } else {
      if (field === 'password') {
        if (this.password) {
          this.errData.password = '';
          this.passwordClass = this.passwordIsFocused ? 'az-login__customInput az-login__isFocused' : 'az-login__customInput';
          this.validateForm();
          this.validateUserName();
        } else {
          this.passwordClass = this.passwordIsFocused ? 'az-login__customInput az-login__isFocused' : 'az-login__customInput az-login__error';
          this.isFormDisabled = true;
          this.errData.password = MESSAGE.PASSWORD_REQUIRED;
        }
      }
    }
    this.validateEmptyUsername();
  }

  validateForm() {
    if (this.userName && this.password && !this.errData.userName && !this.errData.password)
      this.isFormDisabled = false;
    else this.isFormDisabled = true;

    if (this.userName && !this.errData.userName) this.changeResetPwDisabled = false;
    else this.changeResetPwDisabled = true;
  }

  validateEmptyUsername() {
    if(this.userName === '') {
      this.errData.message = MESSAGE.ENTER_USERNAME;
      this.changeResetPwDisabled = true;
    }
    else if (this.userName !== '' && this.errData.message === MESSAGE.ENTER_USERNAME) this.errData.message = '';
  }

  validateUserName() {
    if (this.userName) {
      const email = this.userName.trim().toLowerCase();
      if (email && email.indexOf('@') !== -1 && email.indexOf(' ') === -1) {
        const [_, domain] = email.split('@');
        if (domain === 'allianzpnblife.ph' || domain === 'hsbc.com.ph') {
          this.errData.userName = '';
          this.usernameClass = 'az-login__usernameInput';
          this.validateForm();
          return false;
        }
        else {
          this.isFormDisabled = true;
          this.changeResetPwDisabled = true;
        }
      }
      this.usernameClass = this.usernameIsFocused ? 'az-login__usernameInput az-login__isFocused' : 'az-login__usernameInput az-login__error';
      this.errData.userName = MESSAGE.VALID_USERNAME;
      this.changeResetPwDisabled = true;
      return false;
    } else {
      this.isFormDisabled = true;
    }
    this.usernameClass = 'az-login__usernameInput';
    this.errData.userName = '';
    return false;
  }

  handleFocus(event, name) {
    if (name === 'userName') {
      this.usernameClass = 'az-login__usernameInput az-login__isFocused';
      this.usernameIsFocused = true;
    } else {
      this.passwordClass = 'az-login__customInput az-login__isFocused';
      this.passwordIsFocused = true;
    }
  }

  networkSubscriber(): void {
    this.networkService.getNetworkStatus().subscribe((connected: boolean) => {
      this.isNetworkAvailable = connected;
    });
  }

  async openTandCModal() {
    const modal = await this.modalCtrl.create({ component: TermsConditionPage, backdropDismiss: false });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null) {
        if (dataReturned.data) {
          await this.onlineLogin(this.userName, this.password);
          const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
          const token = await this.storage.get(SETTING_KEYS.TOKEN);
          if(this.appService.getUserLoggedIn() || token) {
            await this.utilService.cleanMobileTaggingRecordIfBelowDataPatch();
            await this.offAppNumService.setOfflineApplicationNumber(accountManagerID, token);
          }
        }
      }
    });
    return await modal.present();
  }

  async getVersion() {
    this.versionCode = await this.utils.getVersionCode();
    this.versionNumber = await this.utils.getVersionNumber();
  }

  async processReferrorRequest(accountManagerID:string, token:string) {
    const activeChannel = await this.storage.get(SETTING_KEYS.CHANNEL);
    const referrorData = activeChannel == CHANNEL.HSBC ? await this.refferorService.getHSBCReferrors(accountManagerID, token) : await this.loginApi.getReferrorSettings(null, null, accountManagerID, token);
    await this.storage.set(SETTING_KEYS.REFFERROR_DATA, referrorData);
  }

}
