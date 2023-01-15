import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  create = (dateObj: any, todayObj?: any, data?: any): any => {
    if (!todayObj) todayObj = dateObj;
    const cYear = todayObj.getFullYear();
    const cMonth = todayObj.getMonth();
    const cDay = todayObj.getDate();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    let hasMonth = false;
    const firstDate = new Date(year, month - 1, 1); // 指定した年月の初日の情報
    const lastDay = new Date(year, firstDate.getMonth() + 1, 0).getDate(); // 指定した年月の末日
    const weekday = firstDate.getDay(); // 指定した年月の初日の曜日
    const calendarData = [];
    let weekdayCount = weekday;
    const week: any = [];
    for (let i = 0; i < 6; i++) week[i] = [];
    //NOTE: 今月判定
    if (
      cYear == dateObj.getFullYear() &&
      cMonth == dateObj.getMonth()
    )
      hasMonth = true;

    for (let i = 0; i < lastDay; i++) {
      const day = i + 1;
      let dayData: any = [];

      if (data) {
        data.map((v: any) => {
          if (day == v.day) {
            v['has'] = true;
            dayData = v;
          }
        });
      }
      calendarData[i] = {
        dd: day,
        weekday: weekdayCount,
        today: hasMonth && day == cDay ? true : false,
        data: dayData
      };

      //NOTE: 曜日のカウントが6(土曜日)まできたら0(日曜日)に戻す
      if (weekdayCount >= 6) {
        weekdayCount = 0;
      } else {
        weekdayCount++;
      }
    }
    var i = calendarData[0]['weekday']; // 初日の曜日を取得
    //NOTE: カレンダー上の初日より前を埋める
    while (i > 0) {
      i--;
      calendarData.unshift({
        dd: '',
        weekday: i,
      });
    }
    var i = calendarData[calendarData.length - 1]['weekday']; // 末日の曜日を取得
    //NOTE: カレンダー上の末日より後を埋める
    while (i < 6) {
      i++;
      calendarData.push({
        dd: '',
        weekday: i,
      });
    }
    calendarData.map((val: any, id: number) => {
      if (id <= 6) week[0].push(val);
      if (id > 6 && id <= 13) week[1].push(val);
      if (id > 13 && id <= 20) week[2].push(val);
      if (id > 20 && id <= 27) week[3].push(val);
      if (id > 27 && id <= 34) week[4].push(val);
      if (id > 34) week[5].push(val);
    });
    return week;
  };
}
