import { CheckIcon } from '@heroicons/react/solid';
import { useFocusRing } from '@react-aria/focus';
import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { forwardRef, useRef } from 'react';
import tw from 'twin.macro';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { styled } from '../../stitches.config';
import { ContainerLabel, Label, VirtualCheckbox } from '../Checkbox';
import IRadio from './IRadio';
import RadioGroup, { RadioContext, RadioGroupType } from './RadioGroup';

type RadioType = ForwardedComponent<IRadio, HTMLInputElement> & {
  Group: RadioGroupType;
  Label: StyledComponentType<any>;
};

const VirtualRadio = styled(VirtualCheckbox, tw`rounded-full`);

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
      <ContainerLabel className={containerClassName}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={finalRef as any} />
        </VisuallyHidden>
        <VirtualRadio
          disabled={inputProps.disabled}
          selected={isSelected}
          focus={isFocusVisible}
          area={area}
          variant={variant}
          className={className}
        >
          {isSelected &&
            (icon ? icon() : <CheckIcon className="fill-current" />)}
        </VirtualRadio>
        {children}
      </ContainerLabel>
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
