import getBadgeStyles from '@cube-ui/styles/dist/badge';
import React, { FC } from 'react';

import IBadge from './IBadge';

const Badge: FC<IBadge> = ({ children, area, color, className, ...props }) => (
  <span
    className={getBadgeStyles(area as string, color as string, className)}
    {...props}
  >
    {children}
  </span>
);

Badge.defaultProps = {
  color: 'gray',
  area: 'base',
};

export default Badge;
