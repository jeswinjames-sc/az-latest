import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginApiService } from '@services/api/login.api.service.service';
import { SettingsService } from '@services/settings/settings.service.service';
import { RESPONSE_STATUS } from '@utils/constants/response-status';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { ConnectivityService } from '../connectivity/connectivity.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ApplicationNumberData } from '@models/eapp-request/application-number';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { environment } from '@environment/environment';
import { Device } from '@ionic-native/device/ngx';
export interface OfflineAppnumber {
  applicationNumber?: string,
  clientExpiryDate?: string,
  serverExpiryDate?: string,
  used?: boolean,
  usedByMobile?: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ApplicationNumberService {
  private offAppNumList: any;
  private offAppNumMaxCount: number = 10;
  isOnline: any;

  appNoCtr = null;
  appNoCtr$ = new BehaviorSubject<number>(this.appNoCtr);
  appNoCount: Observable<Number>

  networkSubscriber: Subscription;
  toast: any;
  alert: HTMLIonAlertElement;
  appNumCount: any;
  timer: any;


  constructor(private storage: Storage,
    private loginApi: LoginApiService,
    public settingsService: SettingsService,
    private connectivityService: ConnectivityService,
    private alertService: AlertController,
    private http: HTTP,
    private device: Device,
  ) {
    this.appNoCount = this.appNoCtr$.asObservable();
  }

  public setHeadersWithMac(token: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString(),
      'Mac-Address': this.device.uuid
    };
    return headers;
  }

  async setOfflineApplicationNumber(accountManagerID?: string, token?: string) {
    await this.sanitizeAvailableApplicationNumbers();
    if (!(await this.storage.get(KEYS.OFF_APP_NUMBER))) {
      this.offAppNumList = await this.settingsService.getOfflineApplicationNumber();
      if (this.offAppNumList.length < this.offAppNumMaxCount){
        const count = this.offAppNumMaxCount - this.offAppNumList.length;
        this.checkConnection();
        if (this.isOnline) {
          const offAppNumRes = await this.loginApi.getOfflineApplicationNumber(accountManagerID, token, count);
          await this.storage.set(KEYS.OFF_APP_NUMBER_API_ERROR_CODE, offAppNumRes.status);
          if (offAppNumRes.status == RESPONSE_STATUS.SUCCESS_200) {
            const offAppNumRawData = JSON.parse(offAppNumRes.data);
            await this.setAppNumberCount(offAppNumRawData.length);
            await this.storage.set(KEYS.OFF_APP_NUMBER, offAppNumRawData);
            await this.sanitizeAvailableApplicationNumbers();
          } else {
            const message = 'Could not connect to server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + offAppNumRes.status;
            this.showAppNumberCreditToast(message, false, true, false, true);
            const offAppNumErr = JSON.parse(offAppNumRes.error);
            return offAppNumErr;
          }
        }
      }
    } else {
      this.offAppNumList = await this.settingsService.getOfflineApplicationNumber();
      const offAppNumNotUse = this.offAppNumList.filter((e) => {
        return e.used == false || e.usedByMobile == false
      })
      let expiredAppNumfilter = [];
      if (offAppNumNotUse.length > 0) {
        expiredAppNumfilter = offAppNumNotUse.filter((e) => {
          const timeNow = new Date().getTime();
          const clientExpiryEpoch = new Date(e.clientExpiryDate).getTime();
          return clientExpiryEpoch > timeNow
        })
      }
      const filteredAppNumber = offAppNumNotUse.length > 0 ? expiredAppNumfilter : offAppNumNotUse;
      this.checkConnection();
      if (this.isOnline) {
        if (filteredAppNumber.length < this.offAppNumMaxCount) {
          const count = this.offAppNumMaxCount - filteredAppNumber.length;
          const offAppNumRes = await this.loginApi.getOfflineApplicationNumber(accountManagerID, token, count);
          if (offAppNumRes.status == RESPONSE_STATUS.SUCCESS_200) {
            const offAppNumRawData = JSON.parse(offAppNumRes.data);
            offAppNumRawData.forEach(item => {
              filteredAppNumber.push({
                applicationNumber: item.applicationNumber,
                clientExpiryDate: item.clientExpiryDate,
                serverExpiryDate: item.serverExpiryDate,
                used: item.used,
                macAddress: item.macAddress
              })
            });
            this.offAppNumList = filteredAppNumber;
            await this.setAppNumberCount(this.offAppNumList.length);
            await this.storage.set(KEYS.OFF_APP_NUMBER, this.offAppNumList);
            if (this.offAppNumList.length == 10) {
              await this.storage.set(KEYS.OFF_APP_FOR_REPLENISH, true);
            }
            await this.sanitizeAvailableApplicationNumbers();
          } else {
            const message = 'Could not connect to server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + offAppNumRes.status;
            this.showAppNumberCreditToast(message, false, true, false, true);
            const offAppNumErr = JSON.parse(offAppNumRes.error);
            return;
          }
        } else {
          // console.log(`There are still ${this.offAppNumList.length} Application number left.`);
        }
      }
      await this.setAppNumberCount(filteredAppNumber.length);
    }
  }

  async appNumberAutoSet(): Promise<OfflineAppnumber> {
    try {
      await this.sanitizeAvailableApplicationNumbers();
      this.checkConnection();
      if (this.isOnline){
        const [accountManagerID, token] = await Promise.all([
          this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID),
          this.storage.get(SETTING_KEYS.TOKEN)
        ]);
        const offAppNumRes = await this.loginApi.getOfflineApplicationNumber(accountManagerID, token, 1);
        await this.storage.set(KEYS.OFF_APP_NUMBER_API_ERROR_CODE, offAppNumRes.status);
        if(offAppNumRes.status == RESPONSE_STATUS.SUCCESS_200) {
          let offAppNumRawData = JSON.parse(offAppNumRes.data);
          offAppNumRawData.used = true;
          offAppNumRawData.usedByMobile = true;
          await this.storeAppNumTrash([offAppNumRawData[0]]);
          return offAppNumRawData[0];
        } else {
          const message = 'Could not connect to server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + offAppNumRes.status;
          await this.showAppNumberCreditToast(message, false, true, false, true);
          return await this.getOfflineApplicationNumber(true);
        }
      }else{
        return await this.getOfflineApplicationNumber(false);
      }
    }catch(error){
      console.log(error)
      return {};
    }
  }

  async getOfflineApplicationNumber(isOnline: boolean): Promise<OfflineAppnumber>{
    this.offAppNumList = await this.settingsService.getOfflineApplicationNumber();
    if(this.offAppNumList && this.offAppNumList.length > 0) {
      const selectedApp = await this.appNumberAutoSetSelect();
      return selectedApp;
    } else {
      if (isOnline){
        const message = 'No Remaining Application Number credits. <br/>Please connect to the internet.'
        await this.showAppNumberCreditToast(message, true);
      }
      return {};
    }
  }

  async appNumberAutoSetSelect(): Promise<OfflineAppnumber> {
    let offlineAppDetails = null;

    for (let i = 0; i < this.offAppNumList.length; i++) {
      if (this.offAppNumList[i].used || this.offAppNumList.usedByMobile) {
        continue;
      } else {
        const timeNow = new Date().getTime();
        const clientExpiry = new Date(this.offAppNumList[i].clientExpiryDate).getTime();
        if (clientExpiry > timeNow) {
          this.offAppNumList[i].used = true;
          this.offAppNumList[i].usedByMobile = true;
          offlineAppDetails = this.offAppNumList[i];
          break;
        } else {
          continue;
        }
      }
    }

    await this.storage.set(KEYS.OFF_APP_NUMBER, this.offAppNumList);
    await this.refreshAppNumberCount();
    return offlineAppDetails;
  }

  async refreshAppNumberCount() {
    await this.sanitizeAvailableApplicationNumbers();
    const offappnumcount = await this.storage.get(KEYS.OFF_APP_NUMBER)
    if (!offappnumcount) return;
    const offAppNumNotUse = offappnumcount.filter((e) => {
      return e.used == false
    })
    let expiredAppNumfilter = null;
    if (offAppNumNotUse.length > 0) {
      expiredAppNumfilter = offAppNumNotUse.filter((e) => {
        const timeNow = new Date().getTime();
        const clientExpiryEpoch = new Date(e.clientExpiryDate).getTime();
        return clientExpiryEpoch > timeNow
      })
    }
    const filteredAppNumber = offAppNumNotUse.length > 0 ? expiredAppNumfilter.length : offAppNumNotUse.length;
    await this.setAppNumberCount(filteredAppNumber);
  }

  async setAppNumberCount(count) {
    this.appNoCtr$.next(count);
    this.appNumCount = count;
  }

  checkConnection() {
    this.isOnline = navigator.onLine;
  }

  async showAppNumberCreditToast(message, dontShowAgain?: boolean, forError?: any, forReplenish?: any, withRetry?: any, fn?: any) {
    let btns = [];
    if (forError) {
      if (withRetry) {
        btns.push({
          text: `Retry`,
          handler: async () => {
            const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
            const token = await this.storage.get(SETTING_KEYS.TOKEN);
            await this.setOfflineApplicationNumber(accountManagerID, token);
          }
        })
      }
    } else if (forReplenish) {
      //remain blank
    } else {
      await this.refreshAppNumberCount();
      if (await this.storage.get(KEYS.DONTSHOWAGAIN_APP_NUMBER_ALERT)) return;
      if (this.appNumCount > 0) return;

      if (dontShowAgain) {
        btns.push({
          text: `Don't show again`,
          handler: async () => {
            await this.storage.set(KEYS.DONTSHOWAGAIN_APP_NUMBER_ALERT, true);
          }
        })
      }
    }

    btns.push({
      text: 'Close'
    })

    if (this.alert) {
      this.alert.dismiss();
    }

    this.alert = await this.alertService.create({
      id: 'app-num-alert',
      header: 'Application Number',
      message: message,
      cssClass: 'appnumber-alert',
      backdropDismiss: false,
      buttons: btns
    });
    await this.alert.present();

    if (forReplenish) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.alertService.dismiss();
      }, 5000);
    }
  }

  async sanitizeAvailableApplicationNumbers(): Promise<ApplicationNumberData[]> {
    const appData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER) || [];
    const historyData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_HISTORY) || [];
    const trashData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH) || [];

    const combinedData = [...trashData, ...historyData];
    const combinedApplicationNumbers = combinedData.map(item => item.applicationNumber);
    const filteredAppData = appData.filter(item => !combinedApplicationNumbers.includes(item.applicationNumber));

    const invalidAppNumArray: ApplicationNumberData[] = filteredAppData.filter(item => item.used || item.usedByMobile);
    const combinedInvalidData = [...trashData, ...invalidAppNumArray];

    let validAppNumArray: ApplicationNumberData[] = filteredAppData.filter(item => !item.used && !item.usedByMobile);

    const invalidNumberHistory = await this.storage.get(KEYS.INVALID_APPLICATION_NUMBER_HISTORY);
    if(invalidNumberHistory && invalidNumberHistory.length > 0) {
      for(let ii = 0; ii < invalidNumberHistory.length;ii++) {
        let index = validAppNumArray.findIndex(x => x.applicationNumber === invalidNumberHistory[ii]);
        if(index !== -1) {
          combinedInvalidData.push(validAppNumArray[index]);
          validAppNumArray.splice(index, 1);
        }
      }
    }

    const allEappAppNumLocal = await this.storage.get(KEYS.ALL_APPLICATION_NUMBER_EAPP);
    if(allEappAppNumLocal && allEappAppNumLocal.length > 0) {
      for(let i = 0; i < validAppNumArray.length; i++) {
        let index = allEappAppNumLocal.findIndex(x => x === validAppNumArray[i].applicationNumber);
        if(index !== -1) {
          combinedInvalidData.push(validAppNumArray[index]);
          validAppNumArray.splice(i, 1);
        }
      }
    }

    if (combinedInvalidData.length > 0) await this.storeAppNumTrash(combinedInvalidData);

    await this.storage.set(KEYS.OFF_APP_NUMBER, validAppNumArray)
    return validAppNumArray
  }

  async storeAppNumTrash(applicationNumberData: ApplicationNumberData[]): Promise<void> {
    const trashData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH) || [];
    const combinedInvalidData = [...trashData, ...applicationNumberData];
    let seen = new Set();
    applicationNumberData = combinedInvalidData.filter(el => {
      const duplicate = seen.has(el.applicationNumber);
      seen.add(el.applicationNumber);
      return !duplicate;
    });
    
    console.log(`applicationNumberMobileTagging  applicationNumberData:::`, applicationNumberData);

    if(applicationNumberData.length > 0) {
      this.checkConnection();
      if (this.isOnline) {
        let appNumberTrash = await this.applicationNumberMobileTagging(applicationNumberData);
        appNumberTrash = appNumberTrash.map(item => ({
          ...item,
          usedByMobile: true,
          used: true
        }));
        if (appNumberTrash.length > 0) {
          await this.storeAppNumHistory(appNumberTrash);
          await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, []);
        } else {
          await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, applicationNumberData);
        }
      } else {
        await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, applicationNumberData);
      }
    } else {
      await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, applicationNumberData);
    }
  }

  async storeAppNumHistory(applicationNumberData: ApplicationNumberData[]) {
    let historyData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_HISTORY) || [];
    historyData.unshift(...applicationNumberData);
    let seen = new Set();
    historyData = historyData.filter(el => {
      const duplicate = seen.has(el.applicationNumber);
      seen.add(el.applicationNumber);
      return !duplicate;
    });
    await this.storage.set(KEYS.OFF_APP_NUMBER_HISTORY, historyData);
  }

  async applicationNumberMobileTagging(applicationNumbers: Array<ApplicationNumberData>): Promise<ApplicationNumberData[]> {
    const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    const token = await this.storage.get(SETTING_KEYS.TOKEN);
    const params: ApplicationNumberData[] = applicationNumbers;
    
    try {
      const headers = await this.setHeadersWithMac(token);
      const response = await this.http.put(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/application-number/applicationNumberMobileTagging`, params, headers);

      if (!response) {
        const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
        console.log(`applicationNumberMobileTagging  network error:::`, response);
        this.showAppNumberCreditToast(JSON.stringify(response), false);
        return [];
      }
      this.storage.set(KEYS.OFF_APP_NUMBER_API_ERROR_CODE, response.status);
  
      if (response.status === 200) {
        console.log(`applicationNumberMobileTagging SSuccess:::`, response);
        // this.showAppNumberCreditToast(`application numbers succefully updated ${JSON.stringify(applicationNumbers)}`, false);
        return applicationNumbers;
      }
      else if (response.status === 400) {
        console.log(`applicationNumberMobileTagging Error 400:::`, response);
        const message = `error application number ${JSON.stringify(response)}`;
        this.showAppNumberCreditToast(message, false);
        return [];
      }
      else {
        console.log(`applicationNumberMobileTagging ELSE error:::`, response);
        const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
        this.showAppNumberCreditToast(JSON.stringify(response), false);
        return [];
      }
    } catch(e) {
      console.log(`applicationNumberMobileTagging Error 400:::`, e);
      const error = { status: e.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + e.status };
      this.showAppNumberCreditToast(JSON.stringify(e), false);
      return [];
    }
  }

  async getAttachedDate(applicationNumber): Promise<String> {
    const appData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER) || [];
    const historyData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_HISTORY) || [];
    const trashData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH) || [];
    const combinedArray: ApplicationNumberData[] = [
      ...appData,
      ...historyData,
      ...trashData
    ];

    const application = combinedArray.find(data => data.applicationNumber === applicationNumber);
    if (!!application) {
      const { clientExpiryDate } = application;
      return clientExpiryDate;
    }
    return null;
  }

  async appNumberStoredClear(){
    const isApplicationNumberRefreshed = await this.storage.get(KEYS.APPLICATION_NUMBER_REFRESHED);
    if(!isApplicationNumberRefreshed) {
      await this.storage.set(KEYS.APPLICATION_NUMBER_REFRESHED, true);
      await this.storage.set(KEYS.OFF_APP_NUMBER, [])
    }
  }

  async checkApplicationNumber(applicationNumber?: string) {
    const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    const token = await this.storage.get(SETTING_KEYS.TOKEN);
    try {
      const checkAppNumber = await this.http.get(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/checkApplicationNumber/${applicationNumber}`, {}, this.setHeadersWithMac(token))
      return checkAppNumber;
    } catch (e) {
      return e;
    }
  }
}
