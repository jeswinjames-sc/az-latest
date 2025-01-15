import { TestBed } from '@angular/core/testing';

import { DynatraceService } from './dynatrace.service';

describe('DynatraceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynatraceService = TestBed.get(DynatraceService);
    expect(service).toBeTruthy();
  });
});
