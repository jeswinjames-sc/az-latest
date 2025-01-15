import { TestBed } from '@angular/core/testing';

import { AwsClientService } from './aws-client.service';

describe('AwsClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsClientService = TestBed.get(AwsClientService);
    expect(service).toBeTruthy();
  });
});
