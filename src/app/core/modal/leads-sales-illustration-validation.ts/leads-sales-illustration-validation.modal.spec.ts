import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadSalesIllustrationValidationModal } from './leads-sales-illustration-validation.modal';

describe('LeadSalesIllustrationValidationModal', () => {
  let component: LeadSalesIllustrationValidationModal;
  let fixture: ComponentFixture<LeadSalesIllustrationValidationModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSalesIllustrationValidationModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadSalesIllustrationValidationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
