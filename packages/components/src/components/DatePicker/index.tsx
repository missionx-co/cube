import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { addMonths } from 'date-fns';
import React, { forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../Button';
import CalendarUI from './CalendarUI';
import IDatePicker from './IDatePicker';
import Input from './Input';
import { DatePickerContext, useDatePicker } from './useDataPicker';

const DatePicker: ForwardedComponent<IDatePicker, any> = forwardRef(
  (
    {
      onChange,
      placeholder,
      disabled,
      error,
      monthsShown,
      displayValue,
      inputRenderer,
      ...props
    },
    ref,
  ) => {
    const datePicker = useDatePicker(props, ref);

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
      onClick: handleOpenDatePicker,
      onKeyDown: datePicker.handleKeyDown,
    };

    return (
      <DatePickerContext.Provider value={datePicker}>
        <div className="relative flex w-full">
          {inputRenderer ? (
            inputRenderer({
              ...inputProps,
              valueString: datePicker.inputValue,
              value: datePicker.datePickerValue,
            })
          ) : (
            <Input
              {...inputProps}
              error={error}
              onFocus={handleOpenDatePicker}
              readOnly
              value={datePicker.inputValue}
              onIconClick={() => datePicker.setOpen(true)}
            />
          )}
          {datePicker.open && (
            <div
              className="absolute z-50 p-2 bg-white border border-gray-300 rounded-lg"
              ref={floating}
              style={{ top: y ?? '', left: x ?? '' }}
              onKeyDown={datePicker.handleKeyDown}
              role="dialog"
              aria-modal={true}
              aria-label={placeholder ?? 'Choose Date'}
            >
              <div className="flex space-x-8">
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
              </div>
              <div className="flex items-center justify-end pt-2 space-x-3 border-t border-gray-200 border-dotted">
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
              </div>
            </div>
          )}
        </div>
      </DatePickerContext.Provider>
    );
  },
);

DatePicker.defaultProps = {
  disabled: false,
  error: false,
  mode: 'single',
  firstDayOfWeek: 1,
  disabledDates: [],
  monthsShown: 1,
};

export default DatePicker;
