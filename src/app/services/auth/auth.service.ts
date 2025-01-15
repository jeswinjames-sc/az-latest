import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { EncryptionService } from '@services/encryption/encryption.service';
import { UtilService } from '@services/util/util.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {SyncStatus} from '@components/full-sync-button/full-sync-button.component';
import {FullSyncService} from '@components/full-sync-button/full-sync.service';
//import { AppNumService, ProcessQueueService } from '@core/services';
import { ProcessQueueService } from '@core/services';
import { AccountManagerResponseItem } from '@models/account-manager/account-manager';
import { BehaviorSubject } from 'rxjs';
import { LoginApiService } from '@services/api/login.api.service.service';
import { AlertService } from '@services/alert/alert.service';
import { ACTION_MESSAGE } from '@utils/constants/string/action-message';
import { PLAN_TYPE } from '@utils/enums/plan-type';
import { AppService } from '@services/app/app.service';
import { settings } from 'cluster';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _authUser$ = new BehaviorSubject<AccountManagerResponseItem>(null)

  constructor(
    private appService: AppService,
    private storage: Storage,
    private router: Router,
    private encryption: EncryptionService,
    private utils: UtilService,
    private menu: MenuController,
    private alertController: AlertController,
    private syncService: FullSyncService,
    private processQueueService: ProcessQueueService,
    private loginApi: LoginApiService,
    private alertService: AlertService,
    //private appNumService: AppNumService
  ) { }

  // Returns a blank string if the user has never logged in yet.
  async getAccountManagerId(): Promise <string> {
    let accountManagerId: string;
    try {
      accountManagerId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      if  (accountManagerId === null) {
        accountManagerId = '';
      }
    } catch {
      accountManagerId = '';
    }
    return accountManagerId;
  }

  async setLoginData(username: string, password: string, loginResponseData: any) {
    let loginData: any;
    try {
      await this.storage.set(SETTING_KEYS.LOGIN_DATA, loginResponseData);
      await this.storage.set(SETTING_KEYS.USERNAME, username.trim());
      await this.storage.set(SETTING_KEYS.PASSWORD, this.encryption.setPasswordEncrypted(password.trim()));
      loginData = JSON.parse(loginResponseData.data);
      await this.storage.set(SETTING_KEYS.TOKEN, loginData.data.token);
      await this.storage.set(SETTING_KEYS.FIRST_NAME, loginData.data.user.firstName);
      await this.storage.set(SETTING_KEYS.LAST_NAME, loginData.data.user.lastName);
      await this.storage.set(SETTING_KEYS.EMAIL, loginData.data.user.email);
      await this.storage.set(SETTING_KEYS.CHANNEL, loginData.data.user.channel);

      // use this to utilize the WS lastLoginTimestamp as timestamp of last online login:
      // await this.storage.set(SETTING_KEYS.LASTLOGIN_TIMESTAMP, loginData.data.lastLoginTimestamp);
      // use this to utilize the device's current date and time as timestamp of last online login:
      await this.storage.set(SETTING_KEYS.LASTLOGIN_TIMESTAMP, this.utils.convertMillisToDate(this.utils.setDate()).toISOString());

      await this.storage.set(SETTING_KEYS.BAD_PWD_COUNT, loginData.data.badPwdCount);
      await this.storage.set(SETTING_KEYS.BAD_PWD_TIMESTAMP, loginData.data.badPwdTimestamp);
      await this.storage.set(SETTING_KEYS.REQUIRES_PWD_CHANGE, loginData.data.requiresChangePassword);
      await this.storage.set(SETTING_KEYS.AWS_TOKEN, loginData.data.aws.token);
      await this.storage.set(SETTING_KEYS.AWS_IDENTITY_ID, loginData.data.aws.identityId);
    } catch (error) {
      throw error;
    }
  }

  async getIfLoggedIn(): Promise <boolean> {
    let hasLoggedIn: boolean;
    try {
      const accountManagerId =  await this.getAccountManagerId();
      if  (accountManagerId !== '') {
        hasLoggedIn = true;
      }
    } catch {
      hasLoggedIn = false;
    }
    return hasLoggedIn;
  }

  // This one is triggered by a webservice value, NOT from the 3x invalid offline logins.
  async getIfOfflineLocked(): Promise <boolean> {
    let isLocked: boolean;
    try {
      isLocked = await this.storage.get(SETTING_KEYS.LOCKED_OFFLINE);
      if  (isLocked === null) {
        isLocked = false;
      }
    } catch {
      // Assume that user has never logged in yet.
      isLocked = false;
    }
    return isLocked;
  }

  // This one is triggered by the 3x invalid offline logins.
  async getIfExceededInvalidOfflineLogins(): Promise <boolean> {
    try {
      const invalidCount = await this.getInvalidOfflineLoginCount();
      if (invalidCount >= 3) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }

  async getInvalidOfflineLoginCount(): Promise <number> {
    let invalidCount: number;
    try {
      invalidCount = await this.storage.get(SETTING_KEYS.INVALID_OFFLINE_LOGIN_COUNT);
      if  (invalidCount === null) {
        invalidCount = 0;
      }
    } catch {
      invalidCount = 0;
    }
    return invalidCount;
  }

  async updateInvalidOfflineLoginCount(): Promise <void> {
    try {
      let invalidCount = await this.getInvalidOfflineLoginCount();
      invalidCount = invalidCount + 1;
      await this.storage.set(SETTING_KEYS.INVALID_OFFLINE_LOGIN_COUNT, invalidCount);
    } catch (err) {
      throw err;
    }
  }

  async resetInvalidOfflineLoginCount(): Promise <void> {
    try {
      await this.storage.set(SETTING_KEYS.INVALID_OFFLINE_LOGIN_COUNT, 0);
    } catch (err) {
      throw err;
    }
  }

  async doOfflineLogin(inputPassword: string): Promise <boolean> {
    try {
      const encryptedPass = await this.storage.get(SETTING_KEYS.PASSWORD);
      const decryptedPass = this.encryption.getPasswordDecrypted(encryptedPass);
      if (decryptedPass === inputPassword.trim()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  async checkDaysSinceLastLogin(days: number): Promise <boolean> {
    try {
      const dateNow = new Date();
      const lastOnlineLoginDate = await this.storage.get(SETTING_KEYS.LASTLOGIN_TIMESTAMP);
      if (lastOnlineLoginDate !=  null || lastOnlineLoginDate !== '') {
        const dtOnlineLastLoginDate = new Date(lastOnlineLoginDate);
        const diffInDays = this.utils.differenceBetweenDate(dtOnlineLastLoginDate, dateNow);
        if (diffInDays >= days) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }

  async clearLoginValsFromStorage() {
    try {
      await this.storage.remove(SETTING_KEYS.LOGIN_DATA);
      await this.storage.remove(SETTING_KEYS.USERNAME);
      await this.storage.remove(SETTING_KEYS.PASSWORD);
      await this.storage.remove(SETTING_KEYS.TOKEN);
      await this.storage.remove(SETTING_KEYS.FIRST_NAME);
      await this.storage.remove(SETTING_KEYS.LAST_NAME);
      await this.storage.remove(SETTING_KEYS.EMAIL);
      await this.storage.remove(SETTING_KEYS.CHANNEL);
      await this.storage.remove(SETTING_KEYS.LASTLOGIN_TIMESTAMP);
      await this.storage.remove(SETTING_KEYS.BAD_PWD_COUNT);
      await this.storage.remove(SETTING_KEYS.BAD_PWD_TIMESTAMP);
      await this.storage.remove(SETTING_KEYS.REQUIRES_PWD_CHANGE);
    } catch (err) {
      throw err;
    }
  }

  logOut(): void {
    this.presentLogOutAlert();
  }

  async presentLogOutAlert() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'Are you sure you want to log out? Unsynced data might get lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // do nothing
          }
        }, {
          text: 'Ok',
          handler: async () => {
            setTimeout(async () => {
              const isAlert = await this.alertController.getTop();
              if(isAlert) {
                this.alertController.dismiss();
              }
            }, 1000);
            this.logoutUser();
          }
        }
      ]
    });
    await alert.present();
  }

  logoutUser() {
    this.syncService.fullSyncStatus.next(SyncStatus.start);
    this.syncService.allowFullSync.next(true);
    this.storage.set('isWhatsNewShown', false);  
    this.menu.enable(false);
    this.router.navigate(['']).finally(()=>{
      this.appService.setUserLoggedIn(false);
      if(this.processQueueService) {
        this.processQueueService.killAllSubscription();
      }
      //this.appNumService.subscription.unsubscribe();
    })
  }

  /**
   * Updates the AuthUser Behavior subject from values inside ionic storage
   */
  public async initAuthUserFromStorage () {
    await this.storage.get(SETTING_KEYS.ACCOUNTMANAGER_DATA)
    .then((accountManagerData) => {
      this._authUser$.next(new AccountManagerResponseItem(JSON.parse(accountManagerData.data)[0]));
    })
  }

  /**
   * Subject should returns null on logout. Also this is null on start
   * Probably a duplicate of setUserLoggedIn and getUserLoggedIn from app.servics
   * @author Garfunkel.Vila
   */
  public get authUser$ () : BehaviorSubject<AccountManagerResponseItem> {
    // Use initAuthUserFromStorage to rehydrate this value from storage
    return this._authUser$
  }

  async refreshAccountManager() {
    const username = await this.storage.get(SETTING_KEYS.EMAIL);
    const token = await this.storage.get(SETTING_KEYS.TOKEN);
    const accountManagerResponse = await this.loginApi.accountManagerAPIRequest(username, token)
    .then((e) => {
      this._authUser$.next(new AccountManagerResponseItem(JSON.parse(e.data)[0]));
      return e
    });
    await this.storage.set(SETTING_KEYS.ACCOUNTMANAGER_DATA, accountManagerResponse);
  }

  async initLicenseCheck(planType) {
    let isLicenseValid = false;
    const licenseCheckLoading = 'Checking your license details';
    const productPlanType = planType == 0 ? PLAN_TYPE.UL : PLAN_TYPE.TRAD;
    const missingLicenseData = this.authUser$.value.checkLicenseValueValidity(productPlanType);
    if(this.authUser$.value.availableLicenses && missingLicenseData) {
      const licenseAvailable = this.authUser$.value.hasValidLicenseForPlanTypeShort(productPlanType);
        if(licenseAvailable) {
          isLicenseValid = true;
        } else {
          const licenseExpiredMessage = "Your license for this application has expired, you will not be able to proceed in Submitting";
          let licenseCheckAlert = await this.alertService
          .displayAlert(licenseExpiredMessage, "Ok",
          () => {
            // Do nothing
            this.utils.dismissLoading()
          });
          await licenseCheckAlert.present();
          isLicenseValid = false
        }
    } else {
      let alertMessage = ACTION_MESSAGE.NO_LICENSE_DETECTED;
      if(!missingLicenseData && productPlanType == PLAN_TYPE.UL) {
        alertMessage = ACTION_MESSAGE.NO_VALIDITY_UL;
      } else if (!missingLicenseData && productPlanType == PLAN_TYPE.TRAD) {
        alertMessage = ACTION_MESSAGE.NO_VALIDITY_TRAD;
      } else {
        alertMessage = ACTION_MESSAGE.NO_LICENSE_DETECTED;
      }
      let licenseCheckAlert = await this.alertService
      .displayAlert(alertMessage, "Ok",
      () => {
        // Do nothing
        this.utils.dismissLoading()
      }
      , 'Refresh', async () => {
        await this.utils.presentLoading(licenseCheckLoading);
        await this.refreshAccountManager();
        this.utils.dismissLoading()
      });
      licenseCheckAlert.present();
      isLicenseValid = false
    }

    return isLicenseValid;
  }

}
