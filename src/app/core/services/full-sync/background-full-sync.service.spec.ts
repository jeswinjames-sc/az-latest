import { TestBed } from '@angular/core/testing';
import { BgFullSyncService } from './background-full-sync.service';


describe('BgFullSyncService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BgFullSyncService = TestBed.get(BgFullSyncService);
        expect(service).toBeTruthy();
    });
});
