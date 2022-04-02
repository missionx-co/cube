import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import React, { FC, useMemo, useState } from 'react';

import Calendar from './CalendarUI';
import DatePickerValueHelper from './DatePickerValueHelper';
import IDatePicker, { IDatePickerValue, Mode } from './IDatePicker';
import {
  CalendarContainer,
  CalendarIcon,
  DatePickerContainer,
  DatePickerInput,
  IconContainer,
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
      <CalendarContainer ref={floating} style={{ top: y ?? '', left: x ?? '' }}>
        <Calendar
          minDate={minDate}
          maxDate={maxDate}
          firstDayOfWeek={firstDayOfWeek}
          disabledDates={disabledDates}
          datePickerValue={datePickerValue}
          hoveredDate={hoveredDate}
          onHover={setHoveredDate}
          onSelect={onSelect}
        />
      </CalendarContainer>
    </DatePickerContainer>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  error: false,
  mode: 'single',
  firstDayOfWeek: 1,
  disabledDates: [],
};

export default DatePicker;
