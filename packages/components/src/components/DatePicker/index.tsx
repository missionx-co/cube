import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { addMonths } from 'date-fns';
import React, { FC, useState } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import CalendarUI from './CalendarUI';
import IDatePicker from './IDatePicker';
import {
  CalendarContainer,
  CalendarIcon,
  DatePickerContainer,
  DatePickerInput,
  IconContainer,
  PopoverContainer,
} from './styles';
import { DatePickerContext, useDatePicker } from './useDataPicker';

const DatePicker: FC<IDatePicker> = ({
  onChange,
  placeholder,
  disabled,
  error,
  monthsShown,
  ...props
}) => {
  const datePicker = useDatePicker(props);
  const [isFocused, setFocused] = useState(false);

  const { x, y, refs, floating, reference } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), flip(), offset(5)],
  });

  useOnClickOutside(refs.floating, () => datePicker.setOpen(false));

  function handleInputFocus() {
    setFocused(true);
    datePicker.setOpen(true);
  }

  function handleInputBlur() {
    setFocused(false);
  }

  return (
    <DatePickerContext.Provider value={datePicker}>
      <DatePickerContainer>
        <DatePickerInput
          placeholder={placeholder ?? 'Click to select a date'}
          disabled={error}
          error={error}
          onClick={handleInputFocus}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={datePicker.handleKeyDown}
          readOnly
          ref={reference}
        />
        <IconContainer focus={isFocused} disabled={disabled} error={error}>
          <CalendarIcon />
        </IconContainer>
        {datePicker.open && (
          <PopoverContainer
            ref={floating}
            style={{ top: y ?? '', left: x ?? '' }}
            onKeyDown={datePicker.handleKeyDown}
            role="dialog"
            aria-modal={true}
            aria-label={placeholder ?? 'Choose Date'}
          >
            <CalendarContainer>
              {[...Array(monthsShown).keys()].map((month) => (
                <CalendarUI
                  key={month}
                  month={
                    month === 0
                      ? datePicker.activeMonth
                      : addMonths(datePicker.activeMonth, month)
                  }
                />
              ))}
            </CalendarContainer>
          </PopoverContainer>
        )}
      </DatePickerContainer>
    </DatePickerContext.Provider>
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
