import { TestBed } from '@angular/core/testing';

import { FirebaseClientService } from './firebase-client.service';

describe('FirebaseClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseClientService = TestBed.get(FirebaseClientService);
    expect(service).toBeTruthy();
  });
});
