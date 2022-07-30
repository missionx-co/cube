import get from 'lodash/get';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import IAlert from './IAlert';
import Title, { TitleType } from './Title';
import styles from './styles';

const Alert: FC<IAlert> & {
  Title: TitleType;
} = ({ color, variant, children, className, ...props }) => {
  const twClass = twMerge(
    styles.base,
    get(styles, variant as string),
    get(styles, color as string),
    get(styles, `${color}-${variant}`),
    className,
  );
  return (
    <div className={twClass} role="alert" {...props}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  variant: 'light',
  color: 'primary',
};

Alert.Title = Title;

export default Alert;
