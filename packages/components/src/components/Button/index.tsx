import getButtonStyles from '@cube-ui/styles/dist/button';
import React, { FC, forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import Group, { IButtonsGroup } from './Group';
import IButton from './IButton';
import Spinner from './Spinner';

type IButtonType = ForwardedComponent<IButton, HTMLButtonElement> & {
  Group: FC<IButtonsGroup>;
};

const Button: any = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      color,
      variant,
      area,
      loading,
      disabled,
      className,
      children,
      type,
      ...props
    },
    ref,
  ) => (
    <button
      type={type as any}
      ref={ref}
      disabled={loading || disabled}
      className={getButtonStyles(
        area as string,
        variant as string,
        color as string,
        loading as boolean,
        className,
      )}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  ),
);

Button.defaultProps = {
  color: 'primary',
  variant: 'fill',
  area: 'base',
  loading: false,
};

Button.Group = Group;

const ButtonComponent = Button as IButtonType;

export default ButtonComponent;
