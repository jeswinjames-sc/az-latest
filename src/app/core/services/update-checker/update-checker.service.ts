import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@awesome-cordova-plugins/http/ngx';
import { AppUpdateModalComponent } from '@components/modals/app-update-modal/app-update-modal.component';
import { ModalController, ToastController, Platform } from '@ionic/angular';
import { UtilService } from '@services/util/util.service';
import { Router } from '@angular/router';
import {  ConnectivityService } from '@core/services';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { environment } from '@environment/environment';
import { RESPONSE_STATUS } from '@utils/constants/response-status';
import { timer } from 'rxjs/internal/observable/timer';
import { DatePipe } from '@angular/common'
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { KEYS } from '@utils/constants/storage-keys/keys';


export interface APPUpdateInterface {
  id: string;
  launchDate?: Date;
  description?: string[];
  type?: 1 | 0;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateCheckerService {

  // modal/toast is currently displaying or not
  public isNotificationShown = false;

  // boolean subject for app-header.component
  // true = show update apk icon; vice versa
  public forceUpdateObservable$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  versionCode: string;
  toast;
  private destroy$ = new Subject<void>();
  ctr = 0;

  // list of keywords for URL that has form-generator or the FA is simply typing anything
  pagesUrl = [
    'login',
    'splash',
    'dashboard',
    '',
    'leads',
    'fna',
    'needs-analysis',
    'irpq',
    'list-e-application',
    'referror',
    'sales-illustration',
    'submission-checklist',
  ];

  constructor(
    private platform: Platform,
    private connectivityService: ConnectivityService,
    private datePipe: DatePipe,
    private http: HTTP,
    private localNotifications: LocalNotifications,
    private modalCtrl: ModalController,
    private storage: Storage,
    private router: Router,
    private toastCtrl: ToastController,
    private utilService: UtilService
  ) { }


  /**
   * Starts on app.component init
   * a timer subscription will be running every 5 minutes to check if ther is application update
   * @author JL Gutierrez, Jeron Altura
   */
  async initializeChecker() {
    await this.platform.ready();
    if (this.isSkipUpdatePressed()) {
      return;
    }
    this.versionCode = await this.utilService.getVersionNumber();
    timer(0, 300000) // checks every 5 mins
      .pipe(takeUntil(this.destroy$))
      .subscribe(async () => {
        if (await this.connectivityService.checkInternet()) {
          if (!this.willNotificationShow())
            return;
          this.checkLatestVersion();
        } else { // check stotahe
          await this.processUpdateData(await this.storage.get(KEYS.LATEST_APP_VERSION) || null);
        }
      });
  }


  /**
   * Checks the latest version of APK
   * Showing/Hiding of download icon in the header
   * @param vc: string format of the current version installed
   * @author JL Gutierrez
   */
  async checkLatestVersion() {

    if (this.isNotificationShown) {
      return;
    }
    this.versionCode = await this.utilService.getVersionNumber();
    const response = await this.getJSON();

    if (!response) {
      // hide download icon
      this.forceUpdateObservable$.next(false);
      return;
    }
    
    let { status, data } = response;

    if (status !== RESPONSE_STATUS.SUCCESS_200) {
      data = await this.storage.get(KEYS.LATEST_APP_VERSION) || null;
    }
    await this.processUpdateData(data);
  }

   /**
   * Process Appupdate data 
   * If offline the details will be provided from storage
   * if online the details will be provided from api
   * @param details: string format of the current version installed
   * @author Jerone Altura
   */
  async processUpdateData(details: string) {

    if (!details) {
      // hide download icon
      this.forceUpdateObservable$.next(false);
      return;
    }

    const data = JSON.parse(details);
    if (data.id === '0') { // automatically show maintenance page
      await this.openModal(data);
      this.destroy$.next();
      this.destroy$.complete();
    } else { // show app update
      const responeStatus = this.validateResponse(data);
      if (!responeStatus) {
        // hide download icon
        this.forceUpdateObservable$.next(false);
      } else {
        //.next to true for app-header to show the download icon
        this.forceUpdateObservable$.next(true);
        this.pagesUrl.some(keyword => this.router.url.match(new RegExp(`^\/${keyword}$`, 'g')) !== null) ? this.openModal(data) : this.openToastNotifications(data);
        this.isNotificationShown = true;
        await this.storage.set(KEYS.UPDATED_JOURNEY_FIRST_LOGIN_ATTEMPT, false);
      }
    }
  }




  /**
   * Opens a modal that requests to download the latest version of APK
   * @param data: APPUpdateInterface
   * @author JL Gutierrez
   */
  async openModal(data: APPUpdateInterface) {
    const modal = await this.modalCtrl.create({
      component: AppUpdateModalComponent,
      showBackdrop: true,
      backdropDismiss: false,
      componentProps: {
        descriptions: data.description,
        launchDate: data.launchDate,
        versionCode: data.id,
        type: data.type,
        modalCtrl: this.modalCtrl
      },
      cssClass: 'force-update-modal'
    });

    return await modal.present();
  }

  /**
   * Opens toast and in app notification
   * @author JL Gutierrez
   */
  async openToastNotifications(data: APPUpdateInterface) {

    const buttons = [];
    buttons.push({
      side: 'end',
      text: 'Update',
      handler: () => this.redirectToAirWatchUrl()
    });

    if (data.type === 0) {
      buttons.push({
        side: 'end',
        text: 'Skip',
        handler: () => this.skipUpdate()
      })
    }

    this.toast = await this.toastCtrl.create({
      message:
        `A new update is available.
Allianz Journey APK ${data.id}
${this.datePipe.transform(data.launchDate, 'MMM dd, yyyy')}`,
      animated: true,
      duration: -1,
      position: 'bottom',
      cssClass: 'force-update-checker-toast',
      buttons
    });
    const image = document.createElement('img');
    image.setAttribute('src', 'assets/images/common/agila.png');
    image.setAttribute('height', '65');
    image.setAttribute('width', '65');
    image.setAttribute('alt', 'Profile logo');
    image.style.borderRadius = '50%';
    image.style.marginLeft = '15px';
    const host: any = document.querySelector('.force-update-checker-toast').shadowRoot.firstChild;
    host.querySelector('.toast-container').prepend(image);
    this.toast.present();

    this.localNotifications.schedule({
      id: 0,
      text: 'A new verion software update is available',
      sound: 'file://sound.mp3',
      vibrate: true,
      data: { secret: data.description }
    })

    // Inapp notification settings
    this.localNotifications.on('click').subscribe(() => this.redirectToAirWatchUrl());
  }

  /**
   * GET request to get the current APK version on WS.
   * @author JL Gutierrez
   */
  async getJSON(): Promise<HTTPResponse> {
    try {
      const response = await this.http.get(`${environment.config.androidVersionApiUrl}/android/version/active`, {}, this.setHeaders());
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        this.storage.set(KEYS.LATEST_APP_VERSION, response.data);
      }
      return response;
    } catch (e) {
      console.log('getJSON error::', e)
    }
  }

  /**
   * returns header to be used in GET request
   * @author JL Gutierrez
   */
  private setHeaders(): {} {
    return {
      'Content-Type': 'application/json',
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString()
    };
  }

  /**
   * validations before calling checkLatestVersion();
   * @returns boolean; true if will call checkLatestVersion
   * @author JL Gutierrez
   */
  willNotificationShow(): boolean {
    if (this.isNotificationShown) {
      return false;
    }

    if (this.isSkipUpdatePressed()) {
      return false;
    }

    return true;
  }

  /**
   * Validates the http.get response
   * @param data: APPUpdateInterface
   * @returns true if there is an update available
   * @author JL Gutierrez
   */
  validateResponse(data: APPUpdateInterface): boolean {
    let versionArr = [data.id, this.versionCode];
    versionArr = versionArr.map(a => a.split('.').map(n => +n + 100000).join('.')).sort()
      .map(a => a.split('.').map(n => +n - 100000).join('.'));

    const getCurrentVersionIndex = versionArr.indexOf(this.versionCode);
    const getDataVersionIndex = versionArr.indexOf(data.id);

    const versionOutDated = getCurrentVersionIndex >= getDataVersionIndex ? false : true;
    return new Date(data.launchDate) <= new Date() && versionOutDated;
  }

  /**
   * if skip update button is pressed
   * @returns boolean
   * @author JL Gutierrez
   */
  isSkipUpdatePressed(): boolean {
    return sessionStorage.getItem('skip-update') === 'true';
  }

  /**
   * Dismisses modal and toast if instantiated
   * @author JL Gutierrez
   */
  dismissToastOrModal() {
    if (this.toast) {
      this.toast.dismiss();
    }

    if (this.modalCtrl) {
      this.modalCtrl.dismiss();
    }
  }

  /**
   * Reset's variables for notifcation modal
   * @author JL Gutierrez
   */
  resetNotificationFields() {
    this.isNotificationShown = false;
    sessionStorage.removeItem('skip-update');
    this.forceUpdateObservable$.next(false);
    this.dismissToastOrModal();
  }

  /**
   * Public function to redirect to Google play store APK
   * @author JL Gutierrez
   */
  public redirectToGoogleStore() {
    // this.resetNotificationFields();
    window.open(`https://play.google.com/store/apps/details?id=ph.allianzpnblife.azjourney`);
    this.closeApp();
  }

  /**
   * Public function to redirect to airwatch url
   * @author JL Gutierrez
   */
  public redirectToAirWatchUrl() {
    // this.resetNotificationFields();
    window.open(`https://ds510.awmdm.sg/Catalog/ViewCatalog/%7BSecureDeviceUdid%7D/
    Android?id=ph.allianzpnblife.azjourney&type=Internal`);
    this.closeApp();
  }

  /**
   * public function to skip update which will dismiss modal and toast
   * @author JL Gutierrez
   */
  public skipUpdate() {
    this.dismissToastOrModal();
    this.isNotificationShown = false;

    sessionStorage.setItem('skip-update', 'true');
  }


  public closeApp(){
    (navigator as any).app.exitApp();
  }
}
