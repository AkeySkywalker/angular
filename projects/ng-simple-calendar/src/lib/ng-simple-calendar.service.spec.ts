import { TestBed } from '@angular/core/testing';

import { NgSimpleCalendarService } from './ng-simple-calendar.service';

describe('NgSimpleCalendarService', () => {
  let service: NgSimpleCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSimpleCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
