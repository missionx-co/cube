import { getRadioGroupStyles } from '@cube-ui/styles/dist/radio';
import { useRadioGroup } from '@react-aria/radio';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';
import React, { FC } from 'react';

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
    <div
      className={getRadioGroupStyles({ orientation, className })}
      {...radioGroupProps}
    >
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
