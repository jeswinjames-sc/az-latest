import { TestBed } from '@angular/core/testing';

import { SalesIllustrationService } from './sales-illustration.service';

describe('SalesIllustrationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SalesIllustrationService = TestBed.get(SalesIllustrationService);
        expect(service).toBeTruthy();
    });
});
