import { Injectable } from '@angular/core';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { Device } from '@ionic-native/device/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { environment } from '@environment/environment';
import { ApplicationNumberData } from '@models/eapp-request/application-number';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ConnectivityService }  from '@core/services';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AppNumService {
  public maxRequestAppNumber: number = 10;
  public appNumCount$ = new BehaviorSubject<number>(0);

  public subscription : Subscription;
  alert: HTMLIonAlertElement;
  timer: any;

  constructor(
    private storage: Storage,
    private http: HTTP,
    private device: Device,
    private connectivityService: ConnectivityService,
    private alertService: AlertController,
  ) { }
  

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

  async getGeneratedApplicationNumber(count?: number): Promise<ApplicationNumberData[]> {
    // const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    // const token = await this.storage.get(SETTING_KEYS.TOKEN);
    // const requestCount = count || this.maxRequestAppNumber

  
    //   const response = await this.http.post(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/application-number/generate/${requestCount}`, {}, this.setHeadersWithMac(token));
      
    //   if(!response){
    //     const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
    //     console.log(`getGeneratedApplicationNumber  network error:::`,response);
    //     this.showAppNumberCreditToast(JSON.stringify(response), false);
    //     return [];
    //   }
    //   this.storage.set(KEYS.OFF_APP_NUMBER_API_ERROR_CODE, response.status);

    //   if (response.status === 200) {
    //     let applicationNumberData = JSON.parse(response.data) as ApplicationNumberData[];
    //     console.log(`getGeneratedApplicationNumber SSuccess:::`,response);
    //     // this.showAppNumberCreditToast(`application numbers succefully updated ${JSON.stringify(applicationNumberData)}`, false);
    //     return applicationNumberData;
    //   } else {
    //     console.log(`getGeneratedApplicationNumber ELSE error:::`,response);
    //     const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
    //     this.handleError(error);
    //     this.showAppNumberCreditToast(JSON.stringify(response), false);
    //     return [];
      
    //   }
    return [];
  
  }

  async applicationNumberMobileTagging(applicationNumbers: Array<ApplicationNumberData>): Promise<ApplicationNumberData[]> {
    const accountManagerID = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    const token = await this.storage.get(SETTING_KEYS.TOKEN);
    const params: ApplicationNumberData[] = applicationNumbers;

      const response = await this.http.put(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/application-number/applicationNumberMobileTagging`, params, this.setHeadersWithMac(token));
    
      if(!response){
        const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
        console.log(`applicationNumberMobileTagging  network error:::`,response);
        this.showAppNumberCreditToast(JSON.stringify(response), false);
        return [];
      }
      this.storage.set(KEYS.OFF_APP_NUMBER_API_ERROR_CODE, response.status);

      if (response.status === 200) {
        console.log(`applicationNumberMobileTagging SSuccess:::`,response);
        // this.showAppNumberCreditToast(`application numbers succefully updated ${JSON.stringify(applicationNumbers)}`, false);
        return applicationNumbers;
      } 
      else if (response.status === 400) {
        console.log(`applicationNumberMobileTagging Error 400:::`,response);
        const message = `error application number ${JSON.stringify(response)}`;
        this.showAppNumberCreditToast(message, false);
        return [];
      }
      else {
        console.log(`applicationNumberMobileTagging ELSE error:::`,response);
        const error = { status: response.status, message: 'Could not connect to the server. Kindly retry or please contact IT Helpdesk<br/>Error Code: ' + response.status };
        this.handleError(error);
        this.showAppNumberCreditToast(JSON.stringify(response), false);
        return [];
      }
  }

  async getApplicationNumber(): Promise<ApplicationNumberData>{
    await this.sanitizeAvailableApplicationNumbers();
    const applicationNumbers : ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER)
    let applicationNumber : ApplicationNumberData
    if (applicationNumbers && applicationNumbers.length > 0) {
      const indexToUpdate = applicationNumbers.findIndex(number => !number.usedByMobile);
      if (indexToUpdate !== -1) {
        applicationNumber = applicationNumbers[indexToUpdate]
        return applicationNumber;
      } else {
        applicationNumber = null;
      }
    } else {
      applicationNumber = null
    }
    return applicationNumber
  }

  async setApplicationNumber(appNo: string){
    let applicationNumbers : ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER)
    const applicationNumber = applicationNumbers.find(item => item.applicationNumber === appNo)
    const index = applicationNumbers.indexOf(applicationNumber);
    applicationNumbers[index].usedByMobile = true;
    await this.storage.set(KEYS.OFF_APP_NUMBER, applicationNumbers);
    await this.sanitizeAvailableApplicationNumbers();
  }

  async initializeAppNumberService(){
    console.log('initializeAppNumberService started')
    this.subscription = this.connectivityService.appIsOnline$.subscribe(
      async (isConnected: any) => {
        if(isConnected){
          await this.sanitizeAvailableApplicationNumbers();
          const appData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER) || [];
          this.appNumCount$.next(appData.length);
        }
    })
  }

  async refreshAppNumber(){
    const appData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER) || [];
    this.appNumCount$.next(appData.length);
  }

  async sanitizeAvailableApplicationNumbers(): Promise <ApplicationNumberData[]>{
    const appData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER) || [];
    const historyData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_HISTORY) || [];
    const trashData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH) || [];

    const combinedData = [...trashData, ...historyData];
    const combinedApplicationNumbers = combinedData.map(item => item.applicationNumber);
    const filteredAppData = appData.filter(item => !combinedApplicationNumbers.includes(item.applicationNumber));
   
    const invalidAppNumArray : ApplicationNumberData[] = filteredAppData.filter(item => item.used  || item.usedByMobile);
    const combinedInvalidData = [...trashData, ...invalidAppNumArray];
    if (combinedInvalidData.length > 0) await this.storeAppNumTrash(combinedInvalidData);

    let validAppNumArray: ApplicationNumberData[] = filteredAppData.filter(item => !item.used && !item.usedByMobile);
    await this.storage.set(KEYS.OFF_APP_NUMBER, validAppNumArray)
    this.appNumCount$.next(validAppNumArray.length)

    if (validAppNumArray.length < this.maxRequestAppNumber){
      if (await this.connectivityService.checkInternet()){
        const count = this.maxRequestAppNumber - validAppNumArray.length;
        const applicationNumbers : ApplicationNumberData[] = await this.getGeneratedApplicationNumber(count);
        validAppNumArray = [...validAppNumArray, ...applicationNumbers];
        let seen = new Set();
        validAppNumArray = validAppNumArray.filter(el => {
          const duplicate = seen.has(el.applicationNumber);
          seen.add(el.applicationNumber);
          return !duplicate;
        });
        await this.storage.set(KEYS.OFF_APP_NUMBER, validAppNumArray);
        this.sanitizeAvailableApplicationNumbers();
      }else{
        console.log('sanitizeAvailableApplicationNumbers:: NO internet Connection' )
      }
    }

    return validAppNumArray
  }

  async storeAppNumTrash(applicationNumberData: ApplicationNumberData[]): Promise<void>{
    let invalidData: ApplicationNumberData[] = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH) || [];
    invalidData.unshift(...applicationNumberData);
    if (invalidData.length > 0) {
      const isOnline = await this.connectivityService.checkInternet();
      if(isOnline){
        let appNumberTrash = await this.applicationNumberMobileTagging(invalidData);
        appNumberTrash = appNumberTrash.map(item => ({
          ...item,
          usedByMobile: true,
          used: true
        }));
        if (appNumberTrash.length > 0) {
          await this.storeAppNumHistory(appNumberTrash);
          await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, []);
        }else{
          let seen = new Set();
          invalidData = invalidData.filter(el => {
            const duplicate = seen.has(el.applicationNumber);
            seen.add(el.applicationNumber);
            return !duplicate;
          });
          await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, invalidData);
        }
      }else{
        let seen = new Set();
        invalidData = invalidData.filter(el => {
          const duplicate = seen.has(el.applicationNumber);
          seen.add(el.applicationNumber);
          return !duplicate;
        });
        await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, invalidData);
      }
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

  private handleError(error: any): void {
    console.error('Error:', error);
  }

  async showAppNumberCreditToast(message, dontShowAgain?: boolean, retry: boolean = false) {
    let btns = [];
    
    btns.push({
      text: 'Close'
    })
   
    if(retry){
      btns.push({
        text: `Retry`,
        handler: async () => {
          await this.sanitizeAvailableApplicationNumbers();
        }
      })
    }
    
    if(this.alert) {
      this.alert.dismiss();
    }

    if(await this.storage.get(KEYS.DONTSHOWAGAIN_APP_NUMBER_ALERT)) return;

    this.alert = await this.alertService.create({
      id:'app-num-alert',
      header: 'Application Number',
      message: message,
      cssClass: 'appnumber-alert',
      backdropDismiss: false,
      buttons: btns
    });

    if(dontShowAgain) {
      await this.storage.set(KEYS.DONTSHOWAGAIN_APP_NUMBER_ALERT, true);
    } else {
      await this.storage.set(KEYS.DONTSHOWAGAIN_APP_NUMBER_ALERT, false);
    }
    
    await this.alert.present();
  }
}
