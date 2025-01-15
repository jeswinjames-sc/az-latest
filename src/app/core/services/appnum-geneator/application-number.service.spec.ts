import { TestBed } from '@angular/core/testing';

import { AppNumService } from './application-number.service';

describe('ApplicationNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppNumService = TestBed.get(AppNumService);
    expect(service).toBeTruthy();
  });
});
