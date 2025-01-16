import {Injectable} from '@angular/core';
import { CoreSyncService } from '@core/services';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {SyncStatus} from '@components/full-sync-button/full-sync-button.component';
import {SyncReturnModel} from '@models/base-sync-return';
import {delay, map, switchMap, takeUntil, takeWhile, tap} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FullSyncService {
  constructor(private syncService: CoreSyncService) {}

  public fullSyncStatus = new BehaviorSubject(SyncStatus.start);

  public allowFullSync = new BehaviorSubject(true);

  public tryFullSync(): Observable<SyncStatus> {

    this.fullSyncStatus.next(SyncStatus.ongoing);

    return from(this.syncService.fullSyncAllModules()).pipe(
        // delay(10000),
        map(modules => {
         //console.log('returned modules', modules);
          // modules = [{isSync: false, module: 'lead'}, {isSync: false, module: 'needanalysis'}, {isSync: false, module: 'investmentprofile'}, {isSync: false, module: 'quotation'}, {isSync: false, module: 'application'}, {isSync: false, module: 'package'}];
          const failedSyncModules = _.filter(modules, { isSync: false});
         //console.log('failedSyncModules', failedSyncModules);
          let status;
          // if no failed sync
          if (failedSyncModules.length === 0) {
            this.fullSyncStatus.next(SyncStatus.complete);
            this.allowFullSync.next(false);
            return SyncStatus.complete;
          }
          // if all data failed to sync
          if (failedSyncModules.length === modules?.length) {
            status = SyncStatus.failed;
          } else {
            // if partial data failed to sync
            status = SyncStatus.incomplete;
          }
          this.fullSyncStatus.next(status);
          return status;
        })
    );
  }
}
