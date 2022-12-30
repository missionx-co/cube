import { tableHeaderCell } from '@cube-ui/styles/dist/table';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import IHeaderColumn from './IHeaderColumn';

export type HeaderColumnType = React.FC<IHeaderColumn>;

const HeaderColumn: HeaderColumnType = ({ children, className, ...props }) => {
  return (
    <th className={twMerge(tableHeaderCell.base, className)} {...props}>
      {children}
    </th>
  );
};

export default HeaderColumn;
