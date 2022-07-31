import getCheckboxStyles, {
  container,
  label as labelStyles,
} from '@cube-ui/styles/dist/checkbox';
import { CheckIcon } from '@heroicons/react/solid';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import React, { FC, HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import ICheckbox from './ICheckbox';

export type LabelType = FC<HTMLProps<HTMLSpanElement>>;

export const Label: LabelType = ({ className, children, ...props }) => {
  return (
    <span className={twMerge(labelStyles.base, className)} {...props}>
      {children}
    </span>
  );
};

type CheckboxType = FC<ICheckbox> & {
  Label: LabelType;
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
    selected: checked,
    isReadOnly: readonly,
  };
  let state = useToggleState(reactAriaProps);
  let ref = React.useRef<HTMLInputElement>(null);
  let { inputProps } = useCheckbox(reactAriaProps, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label className={twMerge(container.base, containerClassName)}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={getCheckboxStyles({
          disabled: inputProps.disabled,
          focus: isFocusVisible,
          selected: state.isSelected,
          area,
          variant,
          className,
        })}
      >
        {state.isSelected &&
          (icon ? icon : <CheckIcon className="fill-current" />)}
      </div>
      {props.children}
    </label>
  );
};

Checkbox.defaultProps = {
  area: 'base',
  variant: 'outline',
};

Checkbox.Label = Label;

export default Checkbox;
