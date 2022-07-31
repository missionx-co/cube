import {
  container,
  getHandleSwitch,
  getSwitchStyles,
} from '@cube-ui/styles/dist/switch';
import { useFocusRing } from '@react-aria/focus';
import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { Label, LabelType } from '../Checkbox';
import ISwitch from './ISwitch';

type SwitchType = FC<ISwitch> & {
  Label: LabelType;
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
    <label className={twMerge(container.base, containerClassname)}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={getSwitchStyles({
          area,
          selected: state.isSelected,
          focus: isFocusVisible,
          className,
          disabled: inputProps.disabled,
        })}
      >
        <span
          className={getHandleSwitch({ area, selected: state.isSelected })}
        />
      </div>
      {props.children}
    </label>
  );
};

Switch.Label = Label;

Switch.defaultProps = {
  area: 'base',
  disabled: false,
  readonly: false,
};

export default Switch;
