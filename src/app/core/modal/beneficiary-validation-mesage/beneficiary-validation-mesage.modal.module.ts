import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeneficiaryValidationMessageModal } from './beneficiary-validation-mesage.modal';
import { AppDetailsComponent } from '@components/app-details/app-details.component';
import { AppModule } from 'app/app.module';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppModule,
    ComponentsModule
  ],
  exports: [
    BeneficiaryValidationMessageModal
  ],
  entryComponents: [
    BeneficiaryValidationMessageModal
  ]
})
export class BeneficiaryValidationMessageModalModule {}
