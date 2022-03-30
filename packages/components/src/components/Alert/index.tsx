import React, { FC } from 'react';

import IAlert from './IAlert';
import Title, { TitleType } from './Title';
import { AlertContainer } from './styles';

const Alert: FC<IAlert> & {
  Title: TitleType;
} = ({ color, variant, children, ...props }) => {
  return (
    <AlertContainer variant={variant} color={color} role="alert" {...props}>
      {children}
    </AlertContainer>
  );
};

Alert.defaultProps = {
  variant: 'light',
  color: 'primary',
};

Alert.Title = Title;

export default Alert;
