import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTheatreComponent } from './view-theatre.component';

describe('ViewTheatreComponent', () => {
  let component: ViewTheatreComponent;
  let fixture: ComponentFixture<ViewTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
