import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyncModulesStatusModal } from './sync-modules-status.modal';

describe('SyncModulesStatusModal', () => {
  let component: SyncModulesStatusModal;
  let fixture: ComponentFixture<SyncModulesStatusModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncModulesStatusModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyncModulesStatusModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
