import { TestBed } from '@angular/core/testing';
import { ProcessQueueService } from './process-queue.service';

describe('ProcessQueueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessQueueService = TestBed.get(ProcessQueueService);
    expect(service).toBeTruthy();
  });
});
