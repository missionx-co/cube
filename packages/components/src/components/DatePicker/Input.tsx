import { CalendarIcon } from '@heroicons/react/outline';
import React, { Fragment, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import Input from '../Input';
import IInput from '../Input/IInput';

const iconContainerStyles = {
  base: 'px-3.5 py-2.5 bg-white border border-l-0 border-gray-300 rounded-r-lg cursor-pointer',
  disabled: 'disabled:bg-gray-50 disabled:cursor-not-allowed',
  error: 'border-error-300 focus:border-error-300 focus:ring-error-300',
  focus: 'ring-primary-300 ring-2',
};

interface IDatePickerInput extends IInput {
  isFocused?: boolean;
  onIconClick?: (e: any) => any;
}

type DatePickerInputComponent = ForwardedComponent<
  IDatePickerInput,
  HTMLInputElement
>;

const DatePickerInput: DatePickerInputComponent = forwardRef(
  ({ onIconClick, onFocus, onBlur, disabled, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(e: any) {
      setIsFocused(true);
      onFocus && onFocus(e);
    }

    function handleBlur(e: any) {
      setIsFocused(false);
      onBlur && onBlur(e);
    }

    return (
      <Fragment>
        <Input
          className="border-r-0 rounded-r-none"
          disabled={disabled}
          error={error}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
          ref={ref}
        />
        <span
          className={twMerge(
            iconContainerStyles.base,
            isFocused && iconContainerStyles.focus,
            disabled && iconContainerStyles.disabled,
            error && iconContainerStyles.error,
          )}
          onClick={onIconClick}
        >
          <CalendarIcon className="block w-6 h-6 text-gray-400" />
        </span>
      </Fragment>
    );
  },
);

export default DatePickerInput;
