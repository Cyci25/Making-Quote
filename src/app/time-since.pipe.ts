import { Pipe, PipeTransform } from '@angular/core';
import { isDate } from '@angular/common/src/i18n/format_date';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {

  transform(value: any): number{
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) //returns time in milliseconds
    const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds
    var dateCounter = dateDifferenceSeconds/secondsInADay;
    
    if (dateCounter >= 1){
      return dateCounter;
    }else{
      return 0;
    }
    
  }

}
