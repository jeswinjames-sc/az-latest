import { TestBed } from '@angular/core/testing';

import { IrpqService } from './irpq.service';

describe('IrpqService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: IrpqService = TestBed.get(IrpqService);
        expect(service).toBeTruthy();
    });
});
