import { TestBed } from '@angular/core/testing';

import { CladdingService } from './cladding.service';

describe('CladdingService', () => {
  let service: CladdingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CladdingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
