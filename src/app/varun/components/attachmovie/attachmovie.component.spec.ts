import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmovieComponent } from './attachmovie.component';

describe('AttachmovieComponent', () => {
  let component: AttachmovieComponent;
  let fixture: ComponentFixture<AttachmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
