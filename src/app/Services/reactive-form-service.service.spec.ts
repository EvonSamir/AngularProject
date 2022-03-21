import { TestBed } from '@angular/core/testing';

import { ReactiveFormServiceService } from './reactive-form-service.service';

describe('ReactiveFormServiceService', () => {
  let service: ReactiveFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
