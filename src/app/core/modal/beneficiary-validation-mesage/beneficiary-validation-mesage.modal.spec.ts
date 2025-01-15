import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeneficiaryValidationMessageModal } from './beneficiary-validation-mesage.modal';

describe('BeneficiaryValidationMessageModal', () => {
  let component: BeneficiaryValidationMessageModal;
  let fixture: ComponentFixture<BeneficiaryValidationMessageModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryValidationMessageModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiaryValidationMessageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
