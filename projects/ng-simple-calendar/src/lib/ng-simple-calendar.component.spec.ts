import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleCalendarComponent } from './ng-simple-calendar.component';

describe('NgSimpleCalendarComponent', () => {
  let component: NgSimpleCalendarComponent;
  let fixture: ComponentFixture<NgSimpleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSimpleCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSimpleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
