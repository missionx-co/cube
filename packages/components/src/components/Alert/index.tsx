import getAlertStyles from '@cube-ui/styles/dist/alert';
import React, { FC } from 'react';

import IAlert from './IAlert';
import Title, { TitleType } from './Title';

const Alert: FC<IAlert> & {
  Title: TitleType;
} = ({ color, variant, children, className, ...props }) => {
  const twClass = getAlertStyles({ variant, color }, className);
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
