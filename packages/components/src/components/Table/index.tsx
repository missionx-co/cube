import {
  tableContainerStyles,
  tableWrapperStyles,
} from '@cube-ui/styles/dist/table';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Column, { ColumnType } from './Column';
import HeaderColumn, { HeaderColumnType } from './HeaderColumn';
import ITable from './ITable';
import Row, { RowType } from './Row';

const Table: React.FC<ITable> & {
  Row: RowType;
  Cell: ColumnType;
  HeaderCell: HeaderColumnType;
} = ({
  children,
  tableWrapperClassName,
  className,
  before,
  after,
  ...props
}) => {
  return (
    <div className={twMerge(tableWrapperStyles.base, tableWrapperClassName)}>
      {before}
      <table
        className={twMerge(tableContainerStyles.base, className)}
        {...props}
      >
        {children}
      </table>
      {after}
    </div>
  );
};

Table.Row = Row;
Table.HeaderCell = HeaderColumn;
Table.Cell = Column;

export default Table;
