import { NgModule } from '@angular/core';
import { NgSimpleCalendarComponent } from './ng-simple-calendar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgSimpleCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgSimpleCalendarComponent
  ]
})
export class NgSimpleCalendarModule { }
