import clsx from 'classnames';
import React from 'react';

import IRow from './IRow';

export type RowType = React.FC<IRow>;

const Row: RowType = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export default Row;
