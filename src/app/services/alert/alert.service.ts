import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async displayAlert(message: string, actionLabel?: string, actionCallBack?: any, cancelLabel?: string, cancelCallBack?: any) {
    const buttons: Array<any> = [];

    if (cancelLabel) {
      buttons.push(
        {
          text: cancelLabel || 'Cancel',
          role: 'cancel',
          handler: cancelCallBack
        }
      );
    }

    if (actionLabel || actionLabel === undefined) {
      buttons.push(
        {
          text: actionLabel || 'OK',
          handler: actionCallBack
        }
      );
    }

    const alert = await this.alertCtrl.create({
      message,
      buttons,
      backdropDismiss: false
    });

    return await alert;
  }
}
