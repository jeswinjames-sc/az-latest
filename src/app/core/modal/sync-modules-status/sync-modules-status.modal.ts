import { Component, OnInit } from '@angular/core';
import { CoreSyncService } from '@core/services';
import { ModalController } from '@ionic/angular';
import { BaseCardInfo } from '@models/base-card-info';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';

@Component({
  selector: 'sync-modules-status',
  templateUrl: './sync-modules-status.modal.html',
  styleUrls: ['./sync-modules-status.modal.scss'],
})
export class SyncModulesStatusModal implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public coreSyncService: CoreSyncService
    ) { }
  syncIndicator: string = CONSTANTS_STRING.SYNC_COLOR;
  selectedApp: BaseCardInfo;
  isActionShown: boolean = false;
  relatedModules: any;
  foo: any
  bar: any
  applicationNumber: number;
  
  ngOnInit() {

    this.selectedApp = this.relatedModules;
    this.applicationNumber = this.relatedModules.applicationNumber;
   }

  async closePopup(event) {
    await this.modalCtrl.dismiss(false);
  }

  async reSync() {
    await this.modalCtrl.dismiss(true);
    // this.coreSyncService.resync(this.relatedModules.leadId);
  }

}
