import { format } from 'date-fns';

import { IDatePickerValue, Mode, RangeDatePickerValue } from './IDatePicker';
import { isAfter, isBefore, isEqual, isInRange } from './utils';

export default class DatePickerValue {
  mode: Mode;
  value: IDatePickerValue | null;

  constructor(mode: Mode, value: IDatePickerValue | null) {
    this.mode = mode;
    this.value = this.setInitailValue(value);
  }

  get isMultiple() {
    return this.mode === 'multiple';
  }

  get isRange() {
    return this.mode === 'range';
  }

  get isSingleDate() {
    return this.mode === 'single';
  }

  /**
   * return the value if value is a single date
   * return the first date if value is an array of dates
   * return start date of value is a RangeDatePickerValue
   *
   * @return Date|undefined
   */
  public getFirstValue(): Date | null {
    if (!this.value) {
      return null;
    }

    if (this.isMultiple) {
      return (this.value as Date[])[0];
    }

    if (this.isRange) {
      return (this.value as RangeDatePickerValue).startDate;
    }

    return this.value as Date;
  }

  /**
   * return the value if value is a single date
   * return the last date if value is an array of dates
   * return end date of value is a RangeDatePickerValue
   *
   * @return Date|null
   */
  public getLastValue(): Date | null {
    if (!this.value) {
      return null;
    }

    if (Array.isArray(this.value)) {
      return this.value[this.value.length - 1];
    }

    // is object
    if (Object.keys(this.value).length > 0) {
      return (this.value as RangeDatePickerValue).endDate;
    }

    return this.value as Date;
  }

  /**
   * check if the date is the first value of the range
   * in case of single mode or multiple mode this will always through true
   */
  isFirstOfRange(date: Date) {
    if (!this.value) {
      return false;
    }

    if (this.isSingleDate || this.isMultiple) {
      return this.isDateSelected(date);
    }

    const value = this.value as RangeDatePickerValue;
    if (!value.startDate) {
      return false;
    }

    return isEqual(value.startDate, date);
  }

  /**
   * check if the date is the last value of the range
   * in case of single mode or multiple mode this will always through true
   */
  isLastOfRange(date: Date) {
    if (!this.value) {
      return false;
    }

    if (this.isSingleDate || this.isMultiple) {
      return this.isDateSelected(date);
    }

    const value = this.value as RangeDatePickerValue;
    if (!value.endDate) {
      return false;
    }

    return isEqual(value.endDate, date);
  }

  isDateSelected(date: Date) {
    if (!this.value) {
      return false;
    }

    if (this.isMultiple) {
      const selectedValueFound = (this.value as Date[]).find((valueDate) =>
        isEqual(date, valueDate),
      );

      return selectedValueFound !== undefined;
    }

    if (this.isRange) {
      const value = this.value as RangeDatePickerValue;
      if (!value.startDate && !value.endDate) {
        return false;
      }

      if (value.startDate && isEqual(value.startDate, date)) {
        return true;
      }

      if (value.endDate && isEqual(value.endDate, date)) {
        return true;
      }

      if (!value.startDate || !value.endDate) {
        return false;
      }

      return isInRange(date, {
        start: value.startDate,
        end: value.endDate,
      });
    }

    return isEqual(date, this.value as Date);
  }

  isDateHovered(date: Date, hoveredDate?: Date) {
    if (!hoveredDate) {
      return false;
    }

    if (isEqual(date, hoveredDate)) {
      return true;
    }

    if (!this.isRange) {
      return false;
    }

    const range = this.value as RangeDatePickerValue;
    // if selection hasn't started yet or has ended
    if (!range.startDate || (range.startDate && range.endDate)) {
      return false;
    }

    if (isBefore(hoveredDate, range.startDate)) {
      return false;
    }

    return isInRange(date, {
      start: range.startDate,
      end: hoveredDate,
    });
  }

  updateValue(value: Date) {
    if (this.isMultiple) {
      return this.updateMultipleValue(value);
    }

    if (this.isRange) {
      return this.updateRangeValue(value);
    }

    return this.updateSingleValue(value);
  }

  updateSingleValue(date: Date) {
    return new DatePickerValue(this.mode, date);
  }

  updateMultipleValue(date: Date) {
    // if date is not previously selected then add it to the array
    if (!this.isDateSelected(date)) {
      this.value = [...(this.value as Date[]), date];
      return this;
    }

    // if date is previously selected then remove it from the array
    this.value = (this.value as Date[]).filter(
      (selectedDate) => !isEqual(date, selectedDate),
    );
    return this;
  }

  updateRangeValue(date: Date) {
    const range = this.value as RangeDatePickerValue;
    // if range startDate is empty then populate it with the value
    // if range endDate is not empoty then reselect range from the start
    if (!range.startDate || (range.startDate && range.endDate)) {
      this.value = {
        startDate: date,
        endDate: null,
      };
      return this;
    }

    // if range startDate is after or equal to date then reset startDate to be date
    if (isAfter(range.startDate, date) || isEqual(range.startDate, date)) {
      this.value = {
        ...range,
        startDate: date,
      };
      return this;
    }

    // if range startDate is selected and endDate is empty then populate endDate
    this.value = {
      ...range,
      endDate: date,
    };
    return this;
  }

  setInitailValue(value: IDatePickerValue | null): IDatePickerValue | null {
    if (value) {
      return value;
    }

    if (this.isMultiple) {
      return [];
    }

    if (this.isRange) {
      return {
        startDate: null,
        endDate: null,
      };
    }

    return null;
  }

  getValue() {
    return this.value;
  }

  formatValue(selected: IDatePickerValue | null) {
    if (!selected) {
      return '';
    }

    if (this.isRange) {
      return this.formatRange(selected);
    }

    if (this.isMultiple) {
      return this.formatMultiple(selected);
    }

    return format(selected as Date, 'Y-MM-dd');
  }

  formatRange(selected: IDatePickerValue | null) {
    const value = selected as RangeDatePickerValue;
    if (!value.startDate || !value.endDate) {
      return '';
    }

    return `${format(value.startDate, 'Y-MM-dd')} ~ ${format(
      value.endDate,
      'Y-MM-dd',
    )}`;
  }

  formatMultiple(selected: IDatePickerValue | null) {
    const value = selected as Date[];

    if (value.length <= 2) {
      return value.map((date) => format(date, 'Y-MM-dd')).join(' and ');
    }

    return `${format(value[0], 'Y-MM-dd')} and ${value.length - 1} others`;
  }
}
