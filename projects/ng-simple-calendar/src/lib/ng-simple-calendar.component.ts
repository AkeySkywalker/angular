import { Component } from '@angular/core';
import { NgSimpleCalendarService } from './ng-simple-calendar.service';

@Component({
  selector: 'ng-simple-calendar',
  templateUrl: './ng-simple-calendar.component.html',
  styleUrls: ['./ng-simple-calendar.component.scss']
})

export class NgSimpleCalendarComponent {
  header: any = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  calendar: any = [];
  date: any = [];
  today: any = [];
  pickedMonth: any = [];

  constructor(private calendarService: NgSimpleCalendarService) { }

  ngOnInit() {
    this.today = new Date();
    this.date = new Date(this.today.getTime());
    this.pickedMonth = this.date;
    const data = [
      {
        'day': 3,
        'huge': 5,
        'hoge': 'hogehoge'
      },
      {
        'day': 10,
        'huge': 2,
        'hoge': 'hogehoge'
      }
    ];

    this.calendar = this.calendarService.create(this.date, this.today, data);
  }

  setMonth = (num: number) => {
    //NOTE: get some data for this set month from DB or other storages.
    const data = [
      {
        'day': 5,
        'huge': 10,
        'hoge': 'hogehogehoge'
      },
      {
        'day': 10,
        'huge': 2,
        'hoge': 'hogehoge'
      }
    ];

    this.date.setMonth(this.date.getMonth() + num);
    this.calendar = this.calendarService.create(this.date, this.today, data);
    this.pickedMonth = new Date(this.date.getTime());
  };

  pickDate = (day: number, data: any) => {
    if (data.has) {
      alert(
        `You picked the day of ${this.date.getFullYear()}/${this.date.getMonth() + 1
        }/${day}, and it has huge: ${data.huge} and hoge: ${data.hoge}.`
      );
    } else {
      alert(
        `You picked the day of ${this.date.getFullYear()}/${this.date.getMonth() + 1
        }/${day}, and it has no data.`
      );
    }
  };
}
