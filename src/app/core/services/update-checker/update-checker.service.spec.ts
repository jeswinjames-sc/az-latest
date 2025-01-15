import { TestBed } from '@angular/core/testing';

import { UpdateCheckerService } from './update-checker.service';

describe('UpdateCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCheckerService = TestBed.get(UpdateCheckerService);
    expect(service).toBeTruthy();
  });
});
