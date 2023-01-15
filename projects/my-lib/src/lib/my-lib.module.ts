import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibComponent } from './my-lib.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    MyLibComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    CalendarComponent
  ]
})
export class MyLibModule { }
