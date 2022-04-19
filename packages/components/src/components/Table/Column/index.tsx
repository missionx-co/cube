import React from 'react';

import IColumn from './IColumn';
import { TableBodyCell } from './styles';

const Column: React.FC<IColumn> = ({ children, ...props }) => {
  return <TableBodyCell {...props}>{children}</TableBodyCell>;
};

export default Column;
