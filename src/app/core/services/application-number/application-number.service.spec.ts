import { TestBed } from '@angular/core/testing';

import { ApplicationNumberService } from './application-number.service';

describe('ApplicationNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationNumberService = TestBed.get(ApplicationNumberService);
    expect(service).toBeTruthy();
  });
});
