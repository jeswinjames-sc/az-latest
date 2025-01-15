import { TestBed } from '@angular/core/testing';

import { ReferrorService } from './referror.service';

describe('ReferrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferrorService = TestBed.get(ReferrorService);
    expect(service).toBeTruthy();
  });
});
