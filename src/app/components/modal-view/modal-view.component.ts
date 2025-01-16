import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController, LoadingController, Platform } from '@ionic/angular';
import { ModalProps } from '@models/modal-props';
import { Storage } from '@ionic/storage';
import { ConnectivityService } from '@core/services';
import { MESSAGE } from '@utils/constants/string/message';
import { LoginApiService } from '@services/api/login.api.service';
import { UtilService } from '@services/util/util.service';
import { AuthService } from '@services/auth/auth.service';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { SecurityService } from '@services/security/security.service';
import { AppService } from '@services/app/app.service';
import { SettingsService } from '@services/settings/settings.service.service';
import { CONSTANT_NUMBERS } from '@utils/constants/constant-numbers';
import { LOGTYPE } from '@utils/constants/utils';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import { AccountManagerResponseItem } from '@models/account-manager/account-manager';
import { AwsClientService } from '@core/services/aws-client/aws-client.service';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss'],
})
export class ModalViewComponent implements OnInit {

  @Input() modalProps?: ModalProps;
  @Input() modalCtrl?: ModalController;
  @Output() modalFn1: EventEmitter<any> = new EventEmitter();


  // settingsFormGroup: FormGroup = SettingsFormGroup;
  // settings = Settings;
  description: string = '';
  descItemized = [];
  title: string = '';

  errData = {
    userName: '',
    password: '',
    message: ''
  };

  userName = '';
  password = '';
  type = 'password';
  showPassword = false;
  passwordIsFocused = false;
  passwordClass = 'az-login__customInput';
  isNetworkAvailable = false;
  isOfflineLocked = false;
  usernameAuth!: string;
  networkSubscriber!: Subscription;

  constructor(
    private platform: Platform,
    private storage: Storage,
    private utils: UtilService,
    public connectivityService: ConnectivityService,
    private loginApi: LoginApiService,
    private loadingCtrl: LoadingController,
    private authservice: AuthService,
    private securityService: SecurityService,
    private appService: AppService,
    private settingsService: SettingsService,
    private awsClientService: AwsClientService
  ) { }

  async ngOnInit() {
    if (this.modalProps?.type == 'si-product') {
      this.title = this.modalProps.data.title || '';
      this.description = this.modalProps.data.description;

      /** temporary description modification to be removed on next jar */
      if(this.modalProps.data.code == "AZ_FUNDAMENTAL") {
        this.modalProps.data.descItemized[2] = "Provides No Claims Bonus equal to a percentage of total annual premiums for the past 5 policy years provided that no ADDD nor CI claims paid or are payable";
      }

      this.descItemized = this.modalProps.data.descItemized;

      /** IMPORTANT: remove this after the enhancement of Product Descriptions by sir Galen */
      if(this.modalProps.data.code == "AZ_PROTECT") this.description = '';
      /** IMPORTANT: remove this after the enhancement of Product Descriptions by sir Galen */
    }
    if (this.modalProps?.type == 'settings') {
      this.title = 'settings';
    }
    if (this.modalProps?.type == 'password'){
      this.title = 'Re-enter your password';
      this.userName = await this.storage.get(SETTING_KEYS.USERNAME);
      this.subscribeToNetwork();
    }
    if (this.modalProps?.type == 'table' || this.modalProps?.type == 'estate') {
      this.modalProps?.data.secondaryFormGroup.markAllAsTouched();
    }
  }

  dismissModal() {
    if (!!this.modalCtrl) {
      this.modalCtrl.dismiss();
    }
  }

  selectSIProduct() {
    if (!!this.modalCtrl) {
      this.modalCtrl.dismiss(this.modalProps?.data);
      this.utils.addStep(`Select ${this.modalProps?.data.title}`);
    }
  }

  login() {
    this.subscribeToNetwork();
    //console.log(this.isNetworkAvailable);
    if ((this.password.trim() !== '')) {
      if (this.isNetworkAvailable) {
        // ONLINE
        this.onlineLogin(this.userName, this.password);
      } else {
        // OFFLINE
        this.offlineLogin(this.password);
      }
      
    } else {
      this.errData.message = MESSAGE.NO_CREDENTIALS;
    }
  }

  async offlineLogin(password: string) {
    try {

      // If locked by webservices:
      this.isOfflineLocked = await this.authservice.getIfOfflineLocked();
      if (this.isOfflineLocked) {
        this.utils.infoAlert(MESSAGE.ACCOUNT_LOCKED);
        this.logOut();        
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
        this.utils.infoAlert(MESSAGE.EXCEEDED_INVALID_OFFLINE_LOGINS);
        this.logOut();
        return;
      }

      const isOfflineAuthenticated = await this.authservice.doOfflineLogin(password);
      if (isOfflineAuthenticated) {
        await this.authservice.resetInvalidOfflineLoginCount();
        this.errData.message = '';
        this.utils.infoAlert(MESSAGE.OFFLINE_LOGIN_SUCCESS);
        this.password = '';
        this.appService.setUserLoggedIn(true);
        this.settingsService.initializeJourneyGlobalData();
        this.loadingCtrl.dismiss();
        this.modalCtrl?.dismiss();
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
      // set initial UI-related vars
      this.errData.message = '';
      this.isOfflineLocked = false;

      // Check certificate
      const securityResponse = await this.securityService.validateCertificate();
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
          await this.storage.set('settingsAge', this.utils.getCurrentTimeStamp());
        //console.log("settingsDuration::", settingsDuration)

        let accountManagerID: string;
        accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
        await this.storage.set(SETTING_KEYS.INITIAL_LOGGED_IN, false);

        accountManagerID = await this.getAccountManagerData(username, token);
        this.getSettings(accountManagerID, token, false);
        this.awsClientService.initializaAWS();
        // if settings age is greater than 30 minutes the app will update the managers and settings
        if (settingsDuration > 30) { //30 mins
          await this.storage.set('settingsAge', this.utils.getCurrentTimeStamp());
        } else {
          //console.log('getAccountManagerData data is updated');
        }
        await this.settingsService.initializeJourneyGlobalData();
        this.loadingCtrl.dismiss();
        this.password = '';
        this.appService.setUserLoggedIn(true);
        this.modalCtrl?.dismiss();
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
      await loader.present();
      const loginResponseData = await this.loginApi.onlineLoginRequest(username.trim(), password.trim());
  
      if (loginResponseData.status === CONSTANT_NUMBERS.API_ACCEPTED) {
        if (environment.awsEnabled) {
          await this.awsClientService.retrieveAWSCredentials(JSON.parse(loginResponseData.data));
        }
        await this.authservice.setLoginData(username, password, loginResponseData);
        this.usernameAuth = JSON.parse(loginResponseData.data).data.user.email;
        const token = JSON.parse(loginResponseData.data).data.token;
        await loader.dismiss();
        return token;
      } 
      
      if (loginResponseData.status === CONSTANT_NUMBERS.CONNECTION_TIMEOUT) {
        await loader.dismiss();
        this.errData.message = MESSAGE.NETWORK_ERROR;
        throw new Error(MESSAGE.NETWORK_ERROR);
      } 
      
      await loader.dismiss();
      this.handleOnlineLoginError(loginResponseData);
      throw new Error('Login failed');
  
    } catch (error) {
      await loader.dismiss();
      this.handleOnlineLoginError(error);
      throw error;
    }
  }

  passwordValidation() {
    if (this.password) {
      this.errData.password = '';
      this.passwordClass = this.passwordIsFocused ? 'az-login__customInput az-login__isFocused' : 'az-login__customInput';
    } else {
      this.passwordClass = this.passwordIsFocused ? 'az-login__customInput az-login__isFocused' : 'az-login__customInput az-login__error';
      this.errData.password = MESSAGE.PASSWORD_REQUIRED;
    }
  }

  handleFocus() {
      this.passwordClass = 'az-login__customInput az-login__isFocused';
      this.passwordIsFocused = true;
  }

  handleBlur() {
      this.passwordIsFocused = false;
      this.passwordValidation();
  }

  toggleViewPassword() {
    if (this.type === 'password') {
      this.type = 'text';
      this.showPassword = true;
    } else {
      this.type = 'password';
      this.showPassword = false;
    }
  }

  async subscribeToNetwork(): Promise<void> {
    await this.platform.ready();
    this.networkSubscriber = this.connectivityService.appIsOnline$.pipe(
      take(1)
    ).subscribe(async isConnected => {
        this.isNetworkAvailable = isConnected;
    });
  }

  async handleOnlineLoginError(responseData: any) {
    //console.log(responseData);
    try {
      // TODO: Refactor this whole thing!
      const loginError = `You provided an invalid password. Please try again.`;
      const errorData = JSON.parse(responseData.error);
      const metaCode = errorData.meta.code;
      if (responseData.status === CONSTANT_NUMBERS.UNAUTHORIZED) {
        // 3 invalid unauthorized logins will also lock you for offline login!
        await this.authservice.updateInvalidOfflineLoginCount();
        if (metaCode === CONSTANT_NUMBERS.CUSTOM_ERROR1) {
          this.errData.message = loginError;
        } else if (metaCode === CONSTANT_NUMBERS.CUSTOM_ERROR2) {
          this.utils.infoAlert(MESSAGE.ACCOUNT_LOCKED);
          await this.storage.set(SETTING_KEYS.LOCKED_OFFLINE, true);
          this.logOut();
        } else if (metaCode === CONSTANT_NUMBERS.EXPIRED_PW) {
          this.errData.message = MESSAGE.EXPIRED_PASSWORD;
        } 
        this.passwordClass = 'az-login__customInput az-login__error';
      } else {
        if (responseData.status === CONSTANT_NUMBERS.LOCKED) {
          this.errData.message = loginError;
          this.passwordClass = 'az-login__customInput az-login__error';
          await this.storage.set(SETTING_KEYS.LOCKED_OFFLINE, true);
          this.isOfflineLocked = true;
          this.utils.infoAlert(MESSAGE.ACCOUNT_LOCKED);
          this.logOut();
        } else {
          if (responseData.status === CONSTANT_NUMBERS.BAD_REQUEST) {
            this.errData.message = loginError;
            this.passwordClass = 'az-login__customInput az-login__error';
          }
        }
      }
      //this.utils.logger(LOGTYPE.error, this.errData.message)
      this.loadingCtrl.dismiss();
    } catch (error) {
      this.loadingCtrl.dismiss();
      throw {
        message: 'WS login error'
      };
    }
  }

  // sets accountmanager response, return accountmanagerID
  async getAccountManagerData(username: string, token: string): Promise<string> {
    try {
      this.utils.dynamicLoadingMessage(MESSAGE.ACCOUNT_MANAGER);
      let accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      const accountManagerResponse = await firstValueFrom(this.loginApi.accountManagerAPIRequest(username, token));
      this.authservice.authUser$.next(new AccountManagerResponseItem(accountManagerResponse[0]));
      await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_DATA, accountManagerResponse);
      const firstName = accountManagerResponse[0].firstName;
      const middleName = accountManagerResponse[0].middleName;
      const lastName = accountManagerResponse[0].name;
      const agentName = `${lastName}, ${firstName} ${middleName ? middleName : ''}`;
      await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_AGENT_NAME, agentName);
      accountManagerID = accountManagerResponse[0].self;
      await this.storage.set(SETTING_KEYS.ACCOUNT_MANAGER_ID, accountManagerID);
      return accountManagerID;
    } catch (err) {
      this.utils.dynamicLoadingMessage('Get account manager error');
      this.loadingCtrl.dismiss();
      throw {
        message: 'Get account manager error'
      };
    }
  }

  async getSettings(accountManagerID: string, token: string, loading: boolean) {
    try {
      this.utils.dynamicLoadingMessage('Getting default list of values...');
      const settings = await this.loginApi.getSystemAPIRequest(accountManagerID, token);
      await this.storage.set(SETTING_KEYS.SETTINGS_DATA, settings);
      // for Leads ans SI, break down response data and store on separate ionic storage keys.
      await this.settingsService.initializeJourneyGlobalData();
    } catch (error) {
      this.utils.dynamicLoadingMessage('Get settings error');
      this.loadingCtrl.dismiss();
      throw {
        message: 'Get settings error'
      };
    }
  }

  logOut() {
    this.authservice.logoutUser();
    this.appService.setUserLoggedIn(false);
    this.modalCtrl?.dismiss();
  }

  addTableFn() {
    if(this.modalProps?.data.secondaryFormGroup?.valid) {
      this.modalCtrl?.dismiss(true);
    } else {
      this.modalProps?.data.secondaryFormGroup?.markAllAsTouched();
      this.utils.presentToastMessage({
        message: 'Please check the form required fields and validation summary',
        color: 'primary',
        position: 'bottom',
        duration: 3000
      })
    }
  }
}
