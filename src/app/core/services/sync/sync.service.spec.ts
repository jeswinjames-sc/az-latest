import { TestBed } from '@angular/core/testing';

import { CoreSyncService } from './sync.service';

describe('CoreSyncService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CoreSyncService = TestBed.get(CoreSyncService);
        expect(service).toBeTruthy();
    });
});
