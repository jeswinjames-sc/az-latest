import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

 import {
    ConnectivityService,
    CoreApiService,
    CoreSyncService,
    DashboardService,
    IrpqService,
    LeadsService,
    NeedsAnalysisService,
    SalesIllustrationService,
    BgFullSyncService,
    ApplicationNumberService,
    ReferrorService,
    AppNumService
 } from '@core/services';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
 
@NgModule({
  imports: [
  CommonModule
  ],
  providers: [
    ConnectivityService,
    CoreApiService,
    CoreSyncService,
    DashboardService,
    DatePipe,
    IrpqService,
    LeadsService,
    NeedsAnalysisService,
    SalesIllustrationService,
    LocalNotifications,
    BgFullSyncService,
    ApplicationNumberService,
    ReferrorService,
    AppNumService
  ],
})
export class CoreModule { }
