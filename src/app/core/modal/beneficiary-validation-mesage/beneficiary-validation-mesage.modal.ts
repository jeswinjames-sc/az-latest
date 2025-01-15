import { Component } from '@angular/core';
import { CoreSyncService } from '@core/services';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'beneficiary-validation-message',
  templateUrl: './beneficiary-validation-mesage.modal.html',
  styleUrls: ['./beneficiary-validation-mesage.modal.scss'],
})
export class BeneficiaryValidationMessageModal {

  constructor(
    public modalCtrl: ModalController,
    public coreSyncService: CoreSyncService
    ) { }
 
  async closePopup() {
    await this.modalCtrl.dismiss(false);
  }

  async proceed() {
    await this.modalCtrl.dismiss(true);
  }

}
