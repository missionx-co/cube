import { tableCellStyles } from '@cube-ui/styles/dist/table';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import IColumn from './IColumn';

const Column: React.FC<IColumn> = ({ children, className, ...props }) => {
  return (
    <td className={twMerge(tableCellStyles.base, className)} {...props}>
      {children}
    </td>
  );
};

export default Column;
