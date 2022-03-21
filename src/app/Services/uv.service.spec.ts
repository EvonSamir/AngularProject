import { TestBed } from '@angular/core/testing';

import { UvService } from './uv.service';

describe('UvService', () => {
  let service: UvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
