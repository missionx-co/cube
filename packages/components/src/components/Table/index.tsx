import React from 'react';

import Column from './Column';
import HeaderColumn from './HeaderColumn';
import ITable from './ITable';
import Row from './Row';
import { Table as TableContainer, TableWrapper } from './styles';

const Table: React.FC<ITable> & {
  Row: React.ElementType;
  Cell: React.ElementType;
  HeaderCell: React.ElementType;
} = ({
  children,
  tableWrapperClassName,
  className,
  before,
  after,
  ...props
}) => {
  return (
    <TableWrapper className={tableWrapperClassName}>
      {before}
      <TableContainer className={className} {...props}>
        {children}
      </TableContainer>
      {after}
    </TableWrapper>
  );
};

Table.Row = Row;
Table.HeaderCell = HeaderColumn;
Table.Cell = Column;

export default Table;
