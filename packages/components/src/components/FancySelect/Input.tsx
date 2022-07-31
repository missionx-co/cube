import { getInputStyles } from '@cube-ui/styles/dist/fancy-select';
import React, { forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { ISelectInput } from './IFancySelect';

export type InputType = ForwardedComponent<ISelectInput, HTMLButtonElement>;

const Input: InputType = forwardRef(
  ({ children, error, className, ...props }, ref) => (
    <button
      type="button"
      ref={ref}
      className={getInputStyles({ className, error })}
      {...props}
    >
      {children}
    </button>
  ),
);

Input.defaultProps = {
  disabled: false,
};

export default Input;
