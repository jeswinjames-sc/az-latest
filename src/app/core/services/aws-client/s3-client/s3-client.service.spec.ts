import { TestBed } from '@angular/core/testing';

import { S3ClientService } from './s3-client.service';

describe('S3ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: S3ClientService = TestBed.get(S3ClientService);
    expect(service).toBeTruthy();
  });
});
