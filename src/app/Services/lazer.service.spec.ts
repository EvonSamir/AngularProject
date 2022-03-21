import { TestBed } from '@angular/core/testing';

import { LazerService } from './lazer.service';

describe('LazerService', () => {
  let service: LazerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
