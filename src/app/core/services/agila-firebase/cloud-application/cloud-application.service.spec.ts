import { TestBed } from '@angular/core/testing';

import { CloudApplicationService } from './cloud-application.service';

describe('CloudApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudApplicationService = TestBed.get(CloudApplicationService);
    expect(service).toBeTruthy();
  });
});
