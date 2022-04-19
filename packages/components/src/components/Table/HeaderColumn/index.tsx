import React from 'react';

import IHeaderColumn from './IHeaderColumn';
import { TableHeadColumn } from './styles';

const HeaderColumn: React.FC<IHeaderColumn> = ({ children, ...props }) => {
  return <TableHeadColumn {...props}>{children}</TableHeadColumn>;
};

export default HeaderColumn;
