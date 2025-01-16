import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FullSyncButtonComponent} from '@components/full-sync-button/full-sync-button.component';

@NgModule({
  declarations: [FullSyncButtonComponent],
  exports: [FullSyncButtonComponent],
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class FullSyncButtonModule { }
