import { TestBed } from '@angular/core/testing';

import { SilkScreenService } from './silk-screen.service';

describe('SilkScreenService', () => {
  let service: SilkScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SilkScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
