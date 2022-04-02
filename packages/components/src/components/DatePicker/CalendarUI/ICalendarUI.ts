import DatePickerValue from '../DatePickerValueHelper';
import Calendar from './Calendar';

export interface MonthNavigation {
  onNextMonthClick: () => any;
  onNextYearClick: () => any;
  onPreviousMonthClick: () => any;
  onPreviousYearClick: () => any;
}

export default interface ICalendarUI extends MonthNavigation {
  month: Date;
  calendar: Calendar;
  hoveredDate?: Date;
  datePickerValue: DatePickerValue;
  onHover: (date?: Date) => any;
  onSelect: (date: Date) => any;
}
