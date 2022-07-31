import { useId } from '@floating-ui/react-dom-interactions';
import React, { forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { OptionLI } from '../FancySelect/Option';
import { IOption } from './ICombobox';

export type OptionType = ForwardedComponent<IOption, HTMLLIElement>;

const Item: OptionType = forwardRef<HTMLLIElement, IOption>(
  ({ children, active, disabled, ...props }, ref) => {
    const id = useId();
    return (
      <OptionLI
        ref={ref as any}
        role="option"
        id={id}
        active={active}
        disabled={disabled}
        aria-selected={active}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </OptionLI>
    );
  },
);

Item.defaultProps = {
  active: false,
  disabled: false,
};

export default Item;
