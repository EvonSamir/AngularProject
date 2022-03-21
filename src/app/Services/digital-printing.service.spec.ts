import { TestBed } from '@angular/core/testing';

import { DigitalPrintingService } from './digital-printing.service';

describe('DigitalPrintingService', () => {
  let service: DigitalPrintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalPrintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
