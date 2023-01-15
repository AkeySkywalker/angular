import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgSimpleCalendarModule } from 'ng-simple-calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSimpleCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
