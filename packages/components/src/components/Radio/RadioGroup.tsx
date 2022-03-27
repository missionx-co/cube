import { useRadioGroup } from '@react-aria/radio';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';

type RadioGroupProps = Omit<
  AriaRadioGroupProps,
  'isDisabled' | 'isReadOnly' | 'validationState' | 'label'
>;

interface IRadioGroup extends RadioGroupProps {
  className?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

export type RadioGroupType = FC<IRadioGroup>;

export let RadioContext = React.createContext<RadioGroupState>({
  name: '',
  isDisabled: false,
  isReadOnly: false,
  selectedValue: '',
  setSelectedValue: () => {},
  lastFocusedValue: '',
  setLastFocusedValue: () => {},
});

const RadioGroupContainer: StyledComponentType<any> = styled('div', {
  ...tw`flex flex-col items-start space-y-3`,
  variants: {
    orientation: {
      horizontal: tw`md:flex-row md:space-y-0 md:space-x-3 md:items-center`,
    },
  },
});

const RadioGroup: RadioGroupType = ({
  children,
  required,
  disabled,
  readonly,
  className,
  orientation,
  ...props
}) => {
  const reactAriaProps: AriaRadioGroupProps = {
    ...props,
    orientation,
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readonly,
  };
  let state = useRadioGroupState(reactAriaProps);
  let { radioGroupProps } = useRadioGroup(reactAriaProps, state);
  return (
    <RadioGroupContainer
      className={className}
      orientation={orientation}
      {...radioGroupProps}
    >
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </RadioGroupContainer>
  );
};

export default RadioGroup;
