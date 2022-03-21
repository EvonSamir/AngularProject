import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPrintingComponent } from './digital-printing.component';

describe('DigitalPrintingComponent', () => {
  let component: DigitalPrintingComponent;
  let fixture: ComponentFixture<DigitalPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPrintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
