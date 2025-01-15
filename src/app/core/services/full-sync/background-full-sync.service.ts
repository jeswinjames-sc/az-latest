import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UtilService } from '@services/util/util.service';
import { stubFalse } from 'lodash';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { ProcessQueueService } from '../process-queue/process-queue.service';
import { timer } from 'rxjs/internal/observable/timer';
@Injectable()
export class BgFullSyncService {

  public backgroundFullSync$ = new BehaviorSubject(false);
  currentMessage = this.backgroundFullSync$.asObservable();

  constructor (
    private utilService: UtilService,
    private storage: Storage,
    private processQueueService: ProcessQueueService,
    private router: Router) {
      this.triggerSync();
    }

  async triggerSync() {
    const url = this.router.url;

    // check page url or if this.processQueueService is still undefined
    // if in splash or login this will return as globalTimerSubject is not yet initialized
    if (/^\/login$|^\/splash$/.test(url) || this.processQueueService === undefined) {
      timer(30000).subscribe(() => this.triggerSync());
      return;
    }

    // this will only process after splash page.
    this.processQueueService.globalTimerSubject$.subscribe(async(iCount: number) => {

      //console.log('processqueue service: called')
      const pendingItems = await this.processQueueService.getPendingQueueItems;

      if (pendingItems && pendingItems.length < 2) {
        let lastFullSyncUpdate = await this.storage.get('lastFullSyncUpdate'), settingsDuration = 0;

        if (!!lastFullSyncUpdate && lastFullSyncUpdate != "undefined") {
          settingsDuration = moment.duration(moment().diff(moment(lastFullSyncUpdate))).asMinutes();
        } else {
          this.backgroundFullSync$.next(true);
          return;
        }

        //console.log("Duration since last updated::", settingsDuration + "minutes")
        // checks the duration since the last updated date is more than 30mins
        if (settingsDuration > 30) {
          this.backgroundFullSync$.next(true);
        } else {
          //console.log('Data is still up to date.');
        }
      } else {
        //console.log('Background is on hold. There is still more than 2 records being synced.');

      }
    })



  }

}