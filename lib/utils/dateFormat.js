import { formatInTimeZone } from "date-fns-tz";

export function dateFormat(date){
  return formatInTimeZone(date, "America/New_York", "yyyy.MM.dd");
  // return formatInTimeZone(date, "America/New_York", "dd MMM yyyy");
  //return formatInTimeZone(date, "Asia/Seoul", "yyyy.MM.dd");
};

export function getFullDate(dateStr){
  const data = dateStr ? new Date(dateStr) : new Date()

  const year = data.getFullYear();    
  const month = data.getMonth() + 1;  
  const date = data.getDate();        

  return `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
};
