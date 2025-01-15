import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.page.html',
  styleUrls: ['./terms-condition.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TermsConditionPage {
  constructor(private modalCtrl: ModalController) {}

  dismiss(accepted: boolean = false) {
    this.modalCtrl.dismiss({
      accepted
    });
  }
}
