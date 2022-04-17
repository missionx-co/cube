import React, { Fragment, forwardRef, useState } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import IInput from '../Input/IInput';
import {
  CalendarIcon,
  DatePickerInput as DatePickerInputContainer,
  IconContainer,
} from './styles';

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
        <DatePickerInputContainer
          disabled={disabled}
          error={error}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
          ref={ref}
        />
        <IconContainer
          focus={isFocused}
          disabled={disabled}
          error={error}
          onClick={onIconClick}
        >
          <CalendarIcon />
        </IconContainer>
      </Fragment>
    );
  },
);

export default DatePickerInput;
