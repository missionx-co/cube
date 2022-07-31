import {
  container,
  contentContainer,
  errorContainer,
  errorIcon,
  hintContainer,
  label,
} from '@cube-ui/styles/dist/form-control';
import { InformationCircleIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import IFormControl from './IFormControl';

const FormControl: FC<IFormControl> = ({
  id,
  fieldLabel,
  hint,
  error,
  atoms,
  children,
  className,
  ...props
}) => {
  const hasLabel = Boolean(fieldLabel);
  const hasError = Boolean(error);

  const { className: labelClassName, ...labelProps } = atoms?.label || {};
  const { className: errorClassName, ...errorProps } = atoms?.error || {};
  const { className: hintClassName, ...hintProps } = atoms?.hint || {};

  return (
    <div className={twMerge(container.base, className)} {...props}>
      {hasLabel && (
        <label
          htmlFor={id}
          className={twMerge(label.base, labelClassName)}
          {...labelProps}
        >
          {fieldLabel}
        </label>
      )}
      <div className={contentContainer.base}>
        {children}
        {hasError && (
          <span className={errorIcon.base}>
            <InformationCircleIcon />
          </span>
        )}
      </div>
      {hasError && (
        <span
          className={twMerge(errorContainer.base, errorClassName)}
          {...errorProps}
        >
          {error}
        </span>
      )}
      {!hasError && (
        <span
          className={twMerge(hintContainer.base, hintClassName)}
          {...hintProps}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default FormControl;
