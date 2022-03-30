import { useFocusRing } from '@react-aria/focus';
import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import { Label } from '../Checkbox';
import ISwitch from './ISwitch';

const ContainerLabel = styled('label', tw`flex items-center`);

const SwitchContainer = styled('div', {
  ...tw`block rounded-xl relative p-0.5 transition-colors duration-300 ease-in-out`,
  variants: {
    area: {
      base: tw`w-11 h-6`,
      sm: tw`w-9 h-5`,
    },
    selected: {
      true: tw`bg-primary-600`,
      false: tw`bg-gray-100 hover:bg-gray-200`,
    },
    focus: {
      true: tw`ring-4 ring-primary-100`,
    },
    disabled: {
      true: tw`bg-gray-50 cursor-not-allowed`,
      false: tw`cursor-pointer`,
    },
  },
});

const HandleContainer: StyledComponentType<any> = styled('span', {
  ...tw`block rounded-full absolute shadow-base bg-white transition duration-300 ease-in-out transform translate-x-0 left-0.5`,
  variants: {
    area: {
      base: tw`h-5 w-5`,
      sm: tw`w-4 h-4`,
    },
    selected: {
      true: tw`translate-x-full`,
      false: tw``,
    },
  },
});

type SwitchType = FC<ISwitch> & {
  Label: StyledComponentType<any>;
};

const Switch: SwitchType = ({
  area,
  defaultChecked,
  checked,
  disabled,
  readonly,
  containerClassname,
  className,
  ...props
}) => {
  const reactAriaProps = {
    ...props,
    defaultSelected: defaultChecked,
    isSelected: checked,
    isDisabled: disabled,
    isReadOnly: readonly,
  };

  let state = useToggleState(reactAriaProps);
  let ref = React.useRef(null);
  let { inputProps } = useSwitch(reactAriaProps, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ContainerLabel className={containerClassname}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <SwitchContainer
        area={area}
        selected={state.isSelected}
        focus={isFocusVisible}
        disabled={disabled}
        className={className}
      >
        <HandleContainer area={area} selected={state.isSelected} />
      </SwitchContainer>
      {props.children}
    </ContainerLabel>
  );
};

Switch.Label = Label;

Switch.defaultProps = {
  area: 'base',
  disabled: false,
  readonly: false,
};

export default Switch;
