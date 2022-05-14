import { CheckIcon } from '@heroicons/react/solid';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import ICheckbox from './ICheckbox';

export const ContainerLabel = styled('label', tw`flex items-center`);

export const VirtualCheckbox = styled('div', {
  ...tw`flex items-center justify-center border-2 rounded`,
  variants: {
    variant: {
      filled: {},
      outline: {},
    },
    area: {
      sm: tw`w-5 h-5`,
      base: tw`w-6 h-6`,
    },
    focus: {
      true: tw`ring-2 ring-offset-1 ring-primary-300`,
    },
    disabled: {
      true: tw`bg-gray-100 border-gray-200 cursor-not-allowed`,
      false: tw`hover:border-primary-600 hover:bg-primary-50 bg-white border-gray-300 cursor-pointer`,
    },
    selected: {
      true: tw`border-primary-600 bg-primary-50 text-primary-600`,
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      selected: true,
      css: tw`bg-primary-600 hover:bg-primary-600 text-white`,
    },
  ],
});

export const Label = styled('span', tw`ml-2 text-sm font-medium text-gray-700`);

type CheckboxType = FC<ICheckbox> & {
  Label: StyledComponentType<any>;
};

const Checkbox: CheckboxType = ({
  area,
  variant,
  containerClassName,
  className,
  icon,
  disabled,
  required,
  defaultChecked,
  checked,
  readonly,
  ...props
}) => {
  const reactAriaProps = {
    ...props,
    isDisabled: disabled,
    isRequired: required,
    defaultSelected: defaultChecked,
    selected: defaultChecked,
    isReadOnly: readonly,
  };
  let state = useToggleState(reactAriaProps);
  let ref = React.useRef<HTMLInputElement>(null);
  let { inputProps } = useCheckbox(reactAriaProps, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ContainerLabel className={containerClassName}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <VirtualCheckbox
        disabled={inputProps.disabled}
        selected={state.isSelected}
        focus={isFocusVisible}
        area={area}
        variant={variant}
        className={className}
      >
        {state.isSelected &&
          (icon ? icon : <CheckIcon className="fill-current" />)}
      </VirtualCheckbox>
      {props.children}
    </ContainerLabel>
  );
};

Checkbox.defaultProps = {
  area: 'base',
  variant: 'outline',
};

Checkbox.Label = Label;

export default Checkbox;
