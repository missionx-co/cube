import {
  addDays,
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  startOfMonth,
  subDays,
  subMonths,
  subYears,
} from 'date-fns';

import DatePickerValueHelper from '../DatePickerValueHelper';
import { DayOfTheWeek } from '../IDatePicker';
import { isAfter, isBefore, isEqual, isInRange } from '../utils';

type Options = {
  firstDayOfTheWeek?: DayOfTheWeek;
  disabledDates?: Date[];
  highlightDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
};

export default class Calendar {
  firstDayOfTheWeek: number;
  disabledDates: Date[];
  highlightDates: Date[];
  minDate?: Date;
  maxDate?: Date;

  constructor(options: Options) {
    this.firstDayOfTheWeek =
      options.firstDayOfTheWeek !== undefined ? options.firstDayOfTheWeek : 1;
    this.disabledDates =
      options.disabledDates !== undefined ? options.disabledDates : [];
    this.highlightDates =
      options.highlightDates !== undefined ? options.highlightDates : [];
    this.minDate = options.minDate;
    this.maxDate = options.maxDate;
  }

  // get the date that will be first presented
  getInitialMonth(selectedDate?: DatePickerValueHelper): Date {
    const value = selectedDate?.getFirstValue();
    if (value) {
      return new Date(value);
    }

    return new Date();
  }

  /**
   * get day of the week with consideration to firstDayOfTheWeek Option
   * @param date: Date
   * @return DayOfTheWeek
   */
  getDay(date: Date): DayOfTheWeek {
    return ((getDay(date) + (7 - this.firstDayOfTheWeek)) % 7) as DayOfTheWeek;
  }

  /**
   * get all days of the month of the specified date
   * @return Date[]
   */
  daysOfMonth(date: Date): Date[] {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  }

  getDaysFromStartOfWeekUntilStartOfMonth(date: Date): Date[] {
    const monthFirstDay = startOfMonth(date);
    const startOfMonthDay = this.getDay(monthFirstDay);
    const dates = [];
    for (let days = startOfMonthDay; days > 0; days--) {
      dates.push(subDays(monthFirstDay, days));
    }
    return dates;
  }

  getDaysFromEndOfMonthUntilEndOfWeek(date: Date): Date[] {
    const monthLastDay = endOfMonth(date);
    const endOfMonthDay = this.getDay(monthLastDay);
    const dates = [];
    for (let days = 1; days < 7 - endOfMonthDay; days++) {
      dates.push(addDays(monthLastDay, days));
    }
    return dates;
  }

  days(date: Date): Date[] {
    return [
      ...this.getDaysFromStartOfWeekUntilStartOfMonth(date),
      ...this.daysOfMonth(date),
      ...this.getDaysFromEndOfMonthUntilEndOfWeek(date),
    ];
  }

  isDateOfMonth(date: Date, month: Date) {
    return date.getMonth() === month.getMonth();
  }

  canMoveToNextMonth(date: Date) {
    if (!this.maxDate) {
      return true;
    }

    const nextMonth = this.nextMonth(date);
    return isBefore(startOfMonth(nextMonth), this.maxDate);
  }

  nextMonth(date: Date) {
    return addMonths(date, 1);
  }

  canMoveToPreviousMonth(date: Date) {
    if (!this.minDate) {
      return true;
    }

    const previous = this.previousMonth(date);
    return isAfter(endOfMonth(previous), this.minDate);
  }

  previousMonth(date: Date) {
    return subMonths(date, 1);
  }

  nextYear(date: Date) {
    return addYears(date, 1);
  }

  previousYear(date: Date) {
    return subYears(date, 1);
  }

  /**
   * check if the current day is disabled
   * @param date
   * @param activeMonth
   */
  isDateDisabled(date: Date) {
    const disabledFouned = this.disabledDates.find((disabledDate) =>
      isEqual(date, disabledDate),
    );

    if (disabledFouned) {
      return true;
    }

    if (this.minDate && isBefore(date, this.minDate)) {
      return true;
    }

    if (this.maxDate && isAfter(date, this.maxDate)) {
      return true;
    }

    return false;
  }

  isSelected(date: Date, datePickerValue: DatePickerValueHelper) {
    if (!datePickerValue) {
      return false;
    }

    return datePickerValue.isDateSelected(date);
  }

  isDateHighlighted(date: Date) {
    const highlightedFound = this.highlightDates.find((highlightedDay) =>
      isEqual(date, highlightedDay),
    );

    return Boolean(highlightedFound);
  }
}
