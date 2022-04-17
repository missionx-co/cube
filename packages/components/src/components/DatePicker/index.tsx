import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { addMonths } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../Button';
import CalendarUI from './CalendarUI';
import IDatePicker from './IDatePicker';
import Input from './Input';
import {
  CalendarContainer,
  DatePickerContainer,
  FooterContainer,
  PopoverContainer,
} from './styles';
import { DatePickerContext, useDatePicker } from './useDataPicker';

const DatePicker: FC<IDatePicker> = ({
  onChange,
  placeholder,
  disabled,
  error,
  monthsShown,
  displayValue,
  inputRenderer,
  ...props
}) => {
  const datePicker = useDatePicker(props);

  const { x, y, refs, floating, reference } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), flip(), offset(5)],
  });

  useOnClickOutside(refs.floating, () => datePicker.setOpen(false));

  function handleOpenDatePicker() {
    datePicker.setOpen(true);
  }

  const inputProps = {
    ref: reference,
    placeholder: placeholder ?? 'Click to select a date',
    disabled,
    error,
    onClick: handleOpenDatePicker,
    onKeyDown: datePicker.handleKeyDown,
    valueString: datePicker.inputValue,
    value: datePicker.datePickerValue,
  };

  return (
    <DatePickerContext.Provider value={datePicker}>
      <DatePickerContainer>
        {inputRenderer ? (
          inputRenderer(inputProps)
        ) : (
          <Input
            {...inputProps}
            onFocus={handleOpenDatePicker}
            readOnly
            value={datePicker.inputValue}
            onIconClick={() => datePicker.setOpen(true)}
          />
        )}
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
            <FooterContainer>
              <Button
                area="sm"
                variant="outline"
                color="error"
                onClick={datePicker.onDiscard}
              >
                Discard
              </Button>
              <Button area="sm" onClick={datePicker.onApply}>
                Apply
              </Button>
            </FooterContainer>
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
