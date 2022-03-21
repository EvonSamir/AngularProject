import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutPrintingComponent } from './in-out-printing.component';

describe('InOutPrintingComponent', () => {
  let component: InOutPrintingComponent;
  let fixture: ComponentFixture<InOutPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutPrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
