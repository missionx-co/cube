export type DayOfTheWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Mode = 'single' | 'multiple' | 'range';

export type RangeDatePickerValue = {
  startDate: Date | null;
  endDate: Date | null;
};

export type IDatePickerValue = Date | Date[] | RangeDatePickerValue;

export type DisplayValueFormatter = (value: IDatePickerValue | null) => string;

export interface CalendarOptions {
  firstDayOfWeek?: DayOfTheWeek;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  monthsShown?: number;
  displayValue?: DisplayValueFormatter;
}

export default interface IDatePicker extends CalendarOptions {
  placeholder?: string;
  defaultValue?: IDatePickerValue;
  mode?: Mode;
  onChange?: (date: IDatePickerValue | null) => void;
  disabled?: boolean;
  error?: boolean;
}
