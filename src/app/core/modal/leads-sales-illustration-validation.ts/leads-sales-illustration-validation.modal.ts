import { Component, OnInit } from '@angular/core';
import { CoreSyncService } from '@core/services';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'leads-sales-illustration-validation',
  templateUrl: './leads-sales-illustration-validation.modal.html',
  styleUrls: ['./leads-sales-illustration-validation.modal.scss'],
})
export class LeadSalesIllustrationValidationModal implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public coreSyncService: CoreSyncService
    ) { }

  timer: number = 60;

  ngOnInit() {
    const countdown = setInterval(()=> {
      this.timer = this.timer - 1;
    },1000)
    setTimeout(async () => {
      await this.closePopup(false)
      clearInterval(countdown);
    }, 60000);
   }

  async closePopup(event) {
    await this.modalCtrl.dismiss(false);
  }

}
