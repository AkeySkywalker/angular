import { NgModule } from '@angular/core';
import { NgSimpleCalendarComponent } from './ng-simple-calendar.component';
import { CommonModule } from '@angular/common';
import { NgSimpleCalendarService } from './ng-simple-calendar.service';

@NgModule({
  declarations: [
    NgSimpleCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NgSimpleCalendarService
  ],
  exports: [
    NgSimpleCalendarComponent
  ]
})
export class NgSimpleCalendarModule { }
