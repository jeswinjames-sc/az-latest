import { TestBed } from '@angular/core/testing';

import { NeedsAnalysisService } from './needs-analysis.service';

describe('NeedsAnalysisService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NeedsAnalysisService = TestBed.get(NeedsAnalysisService);
        expect(service).toBeTruthy();
    });
});
