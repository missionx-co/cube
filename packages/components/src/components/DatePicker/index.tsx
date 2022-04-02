import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { Transition } from '@headlessui/react';
import { addMonths } from 'date-fns';
import React, { FC, useEffect, useMemo, useState } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';
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
  const [open, setOpen] = useState(false);

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

  const { x, y, refs, floating, reference } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), flip(), offset(5)],
  });

  useOnClickOutside(refs.floating, () => setOpen(false));

  function handleInputFocus() {
    setFocused(true);
    setOpen(true);
  }

  function handleInputBlur() {
    setFocused(false);
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 27) {
      setOpen(false);
      return;
    }
  }

  function handleMouseLeave(e: any) {
    setHoveredDate(undefined);
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

  //on closed
  useEffect(() => {
    if (!open) {
      setHoveredDate(undefined);
    }
  }, [open]);

  return (
    <DatePickerContainer>
      <DatePickerInput
        placeholder={placeholder ?? 'Click to select a date'}
        disabled={error}
        error={error}
        onClick={handleInputFocus}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        readOnly
        ref={reference}
      />
      <IconContainer focus={isFocused} disabled={disabled} error={error}>
        <CalendarIcon />
      </IconContainer>
      {open && (
        <PopoverContainer
          ref={floating}
          style={{ top: y ?? '', left: x ?? '' }}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal={true}
          aria-label={placeholder ?? 'Choose Date'}
        >
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
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </CalendarContainer>
        </PopoverContainer>
      )}
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
