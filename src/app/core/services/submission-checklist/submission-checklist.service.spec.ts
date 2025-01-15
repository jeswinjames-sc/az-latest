import { TestBed } from '@angular/core/testing';

import { SubmissionChecklistService } from './submission-checklist.service';

describe('SubmissionChecklistService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SubmissionChecklistService = TestBed.get(SubmissionChecklistService);
        expect(service).toBeTruthy();
    });
});
