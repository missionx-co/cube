import getCheckboxStyles, { container } from '@cube-ui/styles/dist/checkbox';
import { CheckIcon } from '@heroicons/react/solid';
import { useFocusRing } from '@react-aria/focus';
import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import clsx from 'classnames';
import React, { forwardRef, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { Label, LabelType } from '../Checkbox';
import IRadio from './IRadio';
import RadioGroup, { RadioContext, RadioGroupType } from './RadioGroup';

type RadioType = ForwardedComponent<IRadio, HTMLInputElement> & {
  Group: RadioGroupType;
  Label: LabelType;
};

const Radio: any = forwardRef<HTMLElement, IRadio>(
  (
    {
      children,
      area,
      variant,
      containerClassName,
      className,
      disabled,
      icon,
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef(null);

    const finalRef = ref ? ref : internalRef;

    const reactAriaProps = {
      ...props,
      isDisabled: disabled,
    };

    let state = React.useContext(RadioContext);
    let { inputProps } = useRadio(reactAriaProps, state, finalRef as any);
    let { isFocusVisible, focusProps } = useFocusRing();

    let isSelected = state.selectedValue === props.value;

    return (
      <label className={twMerge(container.base, containerClassName)}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} />
        </VisuallyHidden>
        <div
          className={getCheckboxStyles({
            disabled: inputProps.disabled,
            focus: isFocusVisible,
            selected: isSelected,
            area,
            variant,
            className: clsx('rounded-full', className),
          })}
        >
          {isSelected && (icon ? icon : <CheckIcon className="fill-current" />)}
        </div>
        {children}
      </label>
    );
  },
);

Radio.Group = RadioGroup;
Radio.Label = Label;

Radio.defaultProps = {
  area: 'base',
  variant: 'outline',
};

const RadioComponent = Radio as RadioType;

export default RadioComponent;
