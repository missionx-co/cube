import { addDays, subDays } from 'date-fns';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import Calendar from './CalendarUI/Calendar';
import DatePickerValueHelper from './DatePickerValueHelper';
import IDatePicker, { IDatePickerValue, Mode } from './IDatePicker';

export interface DatePickerContext {
  open: boolean;
  activeMonth: Date;
  calendar: Calendar;
  hoveredDate?: Date;
  selected: IDatePickerValue | null;
  setActiveMonth: (date: Date) => any;
  datePickerValue: DatePickerValueHelper;
  setOpen: (open: boolean) => any;
  setSelected: (selected: IDatePickerValue | null) => any;
  setHoveredDate: (hoveredDate?: Date) => any;
  onSelect: (date: Date) => any;
  onApply: () => any;
  onDiscard: () => any;
  goToNextMonth: () => any;
  goToNextYear: () => any;
  goToPreviousMonth: () => any;
  goToPreviousYear: () => any;
  handleKeyDown: (e: any, context?: 'dialog' | 'input' | 'day') => any;
}

export const DatePickerContext = createContext<DatePickerContext>({
  open: false,
  activeMonth: new Date(),
  calendar: null as unknown as Calendar,
  hoveredDate: new Date(),
  selected: null,
  setActiveMonth: () => {},
  datePickerValue: null as unknown as DatePickerValueHelper,
  setOpen: () => {},
  setSelected: () => {},
  setHoveredDate: () => {},
  onSelect: () => {},
  onApply: () => {},
  onDiscard: () => {},
  goToNextMonth: () => {},
  goToNextYear: () => {},
  goToPreviousMonth: () => {},
  goToPreviousYear: () => {},
  handleKeyDown: () => {},
});

export function useDatePicker(props: IDatePicker): DatePickerContext {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<IDatePickerValue | null>(
    props.value ?? null,
  );

  const [hoveredDate, setHoveredDate] = useState<Date>();

  const datePickerValue = useMemo(
    () => new DatePickerValueHelper(props.mode as Mode, selected),
    [props.mode, selected],
  );

  const calendar = new Calendar({
    firstDayOfTheWeek: props.firstDayOfWeek,
    disabledDates: props.disabledDates,
    minDate: props.minDate,
    maxDate: props.maxDate,
  });

  const [activeMonth, setActiveMonth] = useState(
    calendar.getInitialMonth(datePickerValue),
  );

  function onSelect(date: Date) {
    setSelected(datePickerValue.updateValue(date).getValue());
  }

  function onApply() {
    props.onChange && props.onChange(selected);
  }

  function onDiscard() {
    setSelected(null);
    props.onChange && props.onChange(null);
  }

  function goToNextMonth() {
    setActiveMonth((activeMonth) => calendar.nextMonth(activeMonth));
  }

  function goToNextYear() {
    setActiveMonth((activeMonth) => calendar.nextYear(activeMonth));
  }

  function goToPreviousMonth() {
    setActiveMonth((activeMonth) => calendar.previousMonth(activeMonth));
  }

  function goToPreviousYear() {
    setActiveMonth((activeMonth) => calendar.previousYear(activeMonth));
  }

  function moveToMonthIfApplicable(date: Date) {
    //if the new date has the same month then no need to move to a new month
    if (activeMonth.getMonth() === date.getMonth()) {
      return;
    }

    if (activeMonth.getMonth() > date.getMonth()) {
      goToPreviousMonth();
      return;
    }

    goToNextMonth();
  }

  function navigateThroughDates(e: any) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      onSelect(hoveredDate as Date);
      return;
    }

    if (![37, 38, 39, 40].includes(e.keyCode)) {
      return;
    }

    let newHoveredDate: Date;

    switch (e.keyCode) {
      //navigate left
      case 37:
        newHoveredDate = subDays(hoveredDate as Date, 1);
        break;

      //navigate up
      case 38:
        newHoveredDate = subDays(hoveredDate as Date, 7);
        break;

      //navigate right
      case 39:
        newHoveredDate = addDays(hoveredDate as Date, 1);
        break;

      default:
        newHoveredDate = addDays(hoveredDate as Date, 7);
        break;
    }

    setHoveredDate(newHoveredDate);
    moveToMonthIfApplicable(newHoveredDate);
  }

  function handleKeyDown(e: any, context?: 'dialog' | 'input' | 'day') {
    if (e.keyCode === 27) {
      setOpen(false);
      return;
    }

    if (e.target.attributes.getNamedItem('data-cell-type')?.value === 'day') {
      navigateThroughDates(e);
    }
  }

  //on closed
  useEffect(() => {
    if (!open) {
      setHoveredDate(undefined);
    }
  }, [open]);

  return {
    open,
    setOpen,
    calendar,
    datePickerValue,
    selected,
    setSelected,
    hoveredDate,
    setHoveredDate,
    activeMonth,
    setActiveMonth,
    onApply,
    onSelect,
    onDiscard,
    goToNextMonth,
    goToNextYear,
    goToPreviousMonth,
    goToPreviousYear,
    handleKeyDown,
  };
}

export function useDatePickerContext() {
  return useContext(DatePickerContext);
}
