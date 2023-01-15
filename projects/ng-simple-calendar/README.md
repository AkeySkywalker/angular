# NgSimpleCalendar

This is a very barebones calendar service created for Angular version 15.

## Installation

```
npm i ng-simple-calendar
```

## Usage

set NgSimpleCalendarService onto your component.

```
import { Component } from '@angular/core';
import { NgSimpleCalendarService } from 'ng-simple-calendar';

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

```

this.calendarService.create() in your component gives calendar data.

```
week :
[
    {dd: 1, today: false,
        data:{
            [you can set data array...]
        }
    },
    {dd: 2, today: false,
        data:{
            [you can set data array...]
        }
    },
    .... day data of first week ...
],
[
    {dd: 8, today: false,
        data:{
            [you can set data array...]
        }
    },
    .... day data of second week ...
],
....
```

Then, your component.html get the above calendar data.
<br>
The point of this ng-simple-calendar is just gives array data, so it is easy to customize HTML as you want.
<br>
Example HTML:

```
<div>
  <button (click)="setMonth(-1)">Prev</button>
  <button (click)="setMonth(1)">Next</button>
  <div>{{ pickedMonth | date : "yyyy年M月" }}</div>
  <table>
    <tr>
      <th *ngFor="let head of header">{{ head }}</th>
    </tr>
    <tr class="week" *ngFor="let week of calendar">
      <td
        *ngFor="let day of week"
        (click)="pickDate(day.dd, day.data)"
        [class.today]="day.today"
        [class.data]="day.data.has"
      >
        {{ day.dd }}
      </td>
    </tr>
  </table>
</div>
```

## License

MIT License

Copyright (c) 2023 Akey Skywalker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
