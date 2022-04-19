import clsx from 'classnames';
import React from 'react';

import IRow from './IRow';

const Row: React.FC<IRow> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export default Row;
