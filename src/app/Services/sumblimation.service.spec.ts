import { TestBed } from '@angular/core/testing';

import { SumblimationService } from './sumblimation.service';

describe('SumblimationService', () => {
  let service: SumblimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumblimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
