import { ReactNode } from 'react';

import IPagination from '../../Pagination/IPagination';
import IColumn from '../Column/IColumn';
import IHeaderColumn from '../HeaderColumn/IHeaderColumn';
import ITable from '../ITable';
import IRow from '../Row/IRow';
import IDataTableColumn from './IDataTableColumn';

export type SortDirection = 'asc' | 'desc';

export type OnSort = (criteria: {
  key: string;
  direction: SortDirection;
}) => any;

export default interface IDataTable extends ITable {
  columns: IDataTableColumn[];
  items: any[];
  uniqueKey: string;
  rowProps?: IRow;
  headerColumnProps?: IHeaderColumn;
  bodyColumnProps?: IColumn;
  loading?: boolean;
  emptyMessage?: ReactNode;
  headerCheckboxAriaLabel?: string;
  checkboxAriaLabel?: (row: any) => string;
  onRowSelected?: (selected: string[]) => any;
  onSort?: OnSort;
  pagination?: Omit<IPagination, 'onPageChange'> & {
    onPageChange?: (page: number) => any;
  };
}
