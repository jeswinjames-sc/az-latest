import { TestBed } from '@angular/core/testing';

import { DecomProductsService } from './decom-products.service';

describe('DecomProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecomProductsService = TestBed.get(DecomProductsService);
    expect(service).toBeTruthy();
  });
});
