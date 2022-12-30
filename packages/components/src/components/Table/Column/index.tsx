import { tableCellStyles } from '@cube-ui/styles/dist/table';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import IColumn from './IColumn';

export type ColumnType = React.FC<IColumn>;

const Column: ColumnType = ({ children, className, ...props }) => {
  return (
    <td className={twMerge(tableCellStyles.base, className)} {...props}>
      {children}
    </td>
  );
};

export default Column;
