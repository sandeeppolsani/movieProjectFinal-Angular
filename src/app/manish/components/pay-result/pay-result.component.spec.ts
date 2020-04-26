import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayResultComponent } from './pay-result.component';

describe('PayResultComponent', () => {
  let component: PayResultComponent;
  let fixture: ComponentFixture<PayResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
