import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumblimationComponent } from './sumblimation.component';

describe('SumblimationComponent', () => {
  let component: SumblimationComponent;
  let fixture: ComponentFixture<SumblimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumblimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumblimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
