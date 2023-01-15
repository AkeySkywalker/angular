import { Component } from '@angular/core';
import { CalendarService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar';
  header: any = ['日', '月', '火', '水', '木', '金', '土'];
  calendar: any = [];
  date: any = [];
  today: any = [];
  pickedMonth: any = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInt() {
    this.today = new Date();
    this.date = new Date(this.today.getDate());
    this.pickedMonth = this.date;
    this.calendar = this.calendarService.create(this.date);
    console.log(this.calendar);
  }
}
