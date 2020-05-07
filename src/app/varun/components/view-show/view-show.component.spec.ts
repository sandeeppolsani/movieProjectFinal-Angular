import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShowComponent } from './view-show.component';

describe('ViewShowComponent', () => {
  let component: ViewShowComponent;
  let fixture: ComponentFixture<ViewShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
