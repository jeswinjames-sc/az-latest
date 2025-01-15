import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { AlertController, ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Toast } from '@models/utils/toast';
import { v4 as uuid } from 'uuid';
import { ILogParams } from '@core/interfaces';
import { LOG_TYPE } from '@utils/enums/dynatrace-enums';
import { environment } from '@environment/environment';

// eslint-disable-next-line no-var
declare var dtrum;

@Injectable({
  providedIn: 'root'
})
export class DynatraceService {

  toasts: Toast[] = [];

  constructor(
    private alertController: AlertController,
    private file: File,
    private toastCtrl: ToastController,
    private storage: Storage) {

  }

  private userName: string = '';

  async initializeDynatraceUserSesion() {
    if (this.userName === '') {
      this.userName = await this.storage.get(SETTING_KEYS.USERNAME);
    }
    const { env } = environment;
    const en = env !== 'PROD' ? `[${env}]` : ``;
    await dtrum.identifyUser(`${en}${this.userName}`);
  }


  async alertMessage(msg: string) {
    const alert = await this.alertController.create({
      header: 'Dynatrace Alert',
      message: `Is Online:<br/><br/>Dtrum Available: ${!!dtrum}<br/><br/>User: ${this.userName}<br/><br/>${msg}`,
      buttons: [
        {
          text: 'Cancel',
        }
      ]
    });
    await alert.present();
  }


  async logEvent(logParams: ILogParams) {
    const { logType, data } = logParams;

    if (logType === LOG_TYPE.ERROR) {
      const strData = JSON.stringify(data)
      await this.logError(strData);
    }
  }

  async logError(errorMsg: string) {
    try {
      await dtrum.reportError(errorMsg);
    } catch (err) {
      console.log("LOG Dtrum Err: ", err);
    }
  }





  async processOfflineError(errorMsg: string) {
    let errorData: any[] = await this.storage.get(SETTING_KEYS.DYNATRACE_ERRORS);
    if (!errorData) {
      await this.storage.set(SETTING_KEYS.DYNATRACE_ERRORS, []);
      errorData = [];
    }

    const cnErr = {
      UUID: uuid(),
      ErrorMsg: errorMsg,
      TimeStamp: this.getTimeStamp()
    };

    errorData.push(cnErr);
    await this.storage.set(SETTING_KEYS.DYNATRACE_ERRORS, errorData);
  }

  calculateImageSize(base64String) {
    let padding, inBytes, base64StringLength;
    if (base64String.endsWith('==')) { padding = 2; } else if (base64String.endsWith('=')) { padding = 1; } else { padding = 0; }

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    const kbytes: number = inBytes / 1000;
    const totalSizeMB = Math.round(kbytes / Math.pow(1024, 1));
    return {
      kb: kbytes,
      mb: totalSizeMB
    };
  }

  async encodeFileToBase64(filePath: string, file: string) {
    let base64File: string

    await this.file.readAsDataURL(filePath, file)
      .then(base64 => {
        base64File = base64.split(',')[1]
      })
      .catch(err => {
        throw err
      })

    return base64File
  }

  async showPresentToastMessage() {
    await this.toasts[0].present();
  }

  async presentToastMessage(iToast: Toast) {

    const toastProps = {
      message: iToast.message,
      animated: iToast.animated || false,
      color: iToast.color,
      position: iToast.position,
      showCloseButton: iToast.showCloseButton,
      cssClass: iToast.cssClass || 'toast-util',
    };

    if (iToast.duration !== -1) {
      toastProps['duration'] = iToast.duration || 3000 // * set default duration to 3 seconds
    }

    if (iToast.buttons) {
      toastProps['buttons'] = iToast.buttons;
    }

    const toast = await this.toastCtrl.create(toastProps);

    // * callback function when toast is dismissed by user/duration.
    toast.onDidDismiss().then(() => {

      // * removing the first item on queue since it is dismissed.
      this.toasts.shift();

      // * display if there are errors on queue.
      if (this.toasts.length > 0) {
        this.showPresentToastMessage();
      }
    });

    // * puts the error on queue, prevents multiple stacking of toasts
    this.toasts.push(toast);

    // * prompts only when there are no toast in queue, hence, just leave it on toasts array and wait for the toast to dismiss
    return this.toasts.length === 1 && await this.showPresentToastMessage();
  }

  getTimeStamp() {
    const dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let date = ('0' + dateObj.getDate()).slice(-2);
    let hour = ('0' + dateObj.getHours()).slice(-2);
    let minute = ('0' + dateObj.getMinutes()).slice(-2);
    let second = ('0' + dateObj.getSeconds()).slice(-2);
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }
}
