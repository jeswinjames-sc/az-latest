import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {FullSyncService} from '@components/full-sync-button/full-sync.service';
import { BgFullSyncService } from 'app/core/services/full-sync/background-full-sync.service';
import { take } from 'rxjs/operators';
import { constants } from 'os';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';

export enum SyncStatus {
  complete = 'complete',
  failed = 'failed',
  incomplete = 'Incomplete',
  start = 'notStarted',
  ongoing = 'ongoing'
}

@Component({
  selector: 'app-full-sync-button',
  templateUrl: './full-sync-button.component.html',
  styleUrls: ['./full-sync-button.component.scss'],
})
export class FullSyncButtonComponent implements OnInit, OnDestroy {

  public buttonLabel: string;

  public buttonDisabled: boolean;

  public syncStatus: string = SyncStatus.start;

  public syncStatusModel = SyncStatus;

  public subscription$: Subscription;

  public bgFullSyncSubscription$: Subscription;


  public alertMessage = {
    header: 'Sync Data',
    message: 'This is an alert message.',
    buttons: ['OK']
  };

  public label;

  public isLoaded = false;

  constructor(private fullSyncService: FullSyncService,
              private alertController: AlertController,
              private bgFullSyncService: BgFullSyncService) { }

  ngOnInit() {
    this.updateStatus(this.fullSyncService.fullSyncStatus.getValue());

    // if (this.fullSyncService.allowFullSync.getValue()) {
    this.subscription$ = this.fullSyncService.fullSyncStatus.subscribe((value) => {
      //console.log('fullSyncStatus', value);
      this.updateStatus(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.bgFullSyncSubscription$.unsubscribe();

  }

  public async presentAlert(message) {
    const alert = await this.alertController.create(message);
    await alert.present();
  }

  public syncData(): void {
    this.label = 'Updating';

    if (!this.fullSyncService.allowFullSync.getValue()) { return; }

    this.isLoaded = false;
    this.fullSyncService.tryFullSync().subscribe(( status ) => {
      this.updateStatus(status);
    }, (error) => {
      this.alertMessage.header = 'Update Error';
      this.alertMessage.message = 'Something went wrong.' + error + 'JSON' + JSON.stringify(error);
      this.presentAlert(this.alertMessage).then();
      this.fullSyncService.fullSyncStatus.next(SyncStatus.start);
    });
  }

  public updateStatus(status): void {
    if (status === undefined) { return; }
    this.syncStatus =  status;
    this.buttonLabel = this.syncStatusModel.start;
    this.buttonDisabled = false;
    this.isLoaded = true;
    //console.log('syncStatus', this.syncStatus);

    if (status === this.syncStatusModel.start) {
      this.label = 'Update Records';
      return;
    }

    if (status === this.syncStatusModel.ongoing) {
      this.label = 'Updating';
      this.buttonLabel = this.syncStatusModel.ongoing;
      this.buttonDisabled = true;
      return;
    }

    if (status === this.syncStatusModel.complete) {
      this.label = 'Update complete'
      this.buttonLabel =  this.syncStatusModel.complete;
      this.buttonDisabled = true;
      return;
    }

    // if partial data failed to sync
    if (status === this.syncStatusModel.incomplete) {
      this.label = 'Update Incomplete';
    }

    // if all data failed to sync
    if (status === this.syncStatusModel.failed) {
      this.label = 'Update Failed';
    }

    setTimeout(() => {
      this.reset();
    }, 6000);
  }

  public reset(): void {
    this.syncStatus = this.syncStatusModel.start;
    this.fullSyncService.fullSyncStatus.next(this.syncStatusModel.start);
    this.isLoaded = false;
    this.label = 'Update Record';
  }

}
