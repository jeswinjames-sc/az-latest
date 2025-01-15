import { TestBed } from '@angular/core/testing';

import { SyncValidationsService } from './sync-validations.service';

describe('SyncValidationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncValidationsService = TestBed.get(SyncValidationsService);
    expect(service).toBeTruthy();
  });
});