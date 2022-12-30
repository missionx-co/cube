import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import clsx from 'classnames';
import React from 'react';

import IHeaderColumn from '../HeaderColumn/IHeaderColumn';
import Table from '../index';
import { SortDirection } from './IDataTable';
import IDataTableColumn from './IDataTableColumn';

interface IDataTableHeaderCell {
  cellProps?: IHeaderColumn;
  column: IDataTableColumn;
  onSort: (key: string) => any;
  sortByCriteria: {
    key: string;
    direction: SortDirection;
  };
}

const DataTableHeaderCell: React.FC<IDataTableHeaderCell> = ({
  column,
  cellProps,
  onSort,
  sortByCriteria,
}) => {
  const isDataSortedByColumn = column.key === sortByCriteria.key;
  const shouldShowDirectionChevron = column.sort && isDataSortedByColumn;

  return (
    <Table.HeaderCell
      className={clsx({
        'cursor-pointer': Boolean(column.sort),
      })}
      onClick={column.sort ? () => onSort(column.key) : undefined}
      {...cellProps}
    >
      <span className="flex items-center">
        <span>{column.text}</span>
        {shouldShowDirectionChevron && sortByCriteria.direction === 'desc' && (
          <ChevronUpIcon className="block w-5 h-5" />
        )}
        {shouldShowDirectionChevron && sortByCriteria.direction === 'asc' && (
          <ChevronDownIcon className="block w-5 h-5" />
        )}
      </span>
    </Table.HeaderCell>
  );
};

export default DataTableHeaderCell;
