import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { addMonths } from 'date-fns';
import React, { FC, useMemo, useState } from 'react';

import CalendarUI from './CalendarUI';
import Calendar from './CalendarUI/Calendar';
import DatePickerValueHelper from './DatePickerValueHelper';
import IDatePicker, { IDatePickerValue, Mode } from './IDatePicker';
import {
  CalendarContainer,
  CalendarIcon,
  DatePickerContainer,
  DatePickerInput,
  IconContainer,
  PopoverContainer,
} from './styles';

const DatePicker: FC<IDatePicker> = ({
  mode,
  value,
  firstDayOfWeek,
  disabledDates,
  minDate,
  maxDate,
  onChange,
  placeholder,
  disabled,
  error,
  monthsShown,
}) => {
  const [selected, setSelected] = useState<IDatePickerValue | null>(
    value ?? null,
  );
  const [hoveredDate, setHoveredDate] = useState<Date>();
  const [isFocused, setFocused] = useState<boolean>(false);

  const datePickerValue = useMemo(
    () => new DatePickerValueHelper(mode as Mode, selected),
    [mode, selected],
  );

  const calendar = new Calendar({
    firstDayOfTheWeek: firstDayOfWeek,
    disabledDates,
    minDate,
    maxDate,
  });

  const [activeMonth, setActiveMonth] = useState(
    calendar.getInitialMonth(datePickerValue),
  );

  const { x, y, floating, reference } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), flip(), offset(5)],
  });

  function handleInputFocus() {
    setFocused(true);
  }

  function handleInputBlur() {
    setFocused(false);
  }

  function onSelect(date: Date) {
    setSelected(datePickerValue.updateValue(date).getValue());
  }

  function onApply() {
    onChange && onChange(selected);
  }

  function onDiscard() {
    setSelected(null);
    onChange && onChange(null);
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

  return (
    <DatePickerContainer>
      <DatePickerInput
        placeholder={placeholder ?? 'Click to select a date'}
        disabled={error}
        error={error}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        readOnly
        ref={reference}
      />
      <IconContainer focus={isFocused} disabled={disabled} error={error}>
        <CalendarIcon />
      </IconContainer>
      <PopoverContainer ref={floating} style={{ top: y ?? '', left: x ?? '' }}>
        <CalendarContainer>
          {[...Array(monthsShown).keys()].map((month) => (
            <CalendarUI
              key={month}
              month={month === 0 ? activeMonth : addMonths(activeMonth, 1)}
              calendar={calendar}
              onNextMonthClick={goToNextMonth}
              onNextYearClick={goToNextYear}
              onPreviousMonthClick={goToPreviousMonth}
              onPreviousYearClick={goToPreviousYear}
              datePickerValue={datePickerValue}
              hoveredDate={hoveredDate}
              onHover={setHoveredDate}
              onSelect={onSelect}
            />
          ))}
        </CalendarContainer>
      </PopoverContainer>
    </DatePickerContainer>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  error: false,
  mode: 'single',
  firstDayOfWeek: 1,
  disabledDates: [],
  monthsShown: 1,
};

export default DatePicker;
