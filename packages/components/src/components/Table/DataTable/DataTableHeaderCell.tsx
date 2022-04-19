import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import React from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
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

const ChevronUp = styled(ChevronUpIcon, tw`block w-5 h-5`);
const ChevronDown = styled(ChevronDownIcon, tw`block w-5 h-5`);

const SortableHeaderColumn = styled(Table.HeaderCell, {
  variants: {
    sortable: {
      true: tw`cursor-pointer`,
    },
  },
});

const DataTableHeaderCell: React.FC<IDataTableHeaderCell> = ({
  column,
  cellProps,
  onSort,
  sortByCriteria,
}) => {
  const isDataSortedByColumn = column.key === sortByCriteria.key;
  const shouldShowDirectionChevron = column.sort && isDataSortedByColumn;

  return (
    <SortableHeaderColumn
      sortable={Boolean(column.sort)}
      onClick={column.sort ? () => onSort(column.key) : null}
      {...cellProps}
    >
      <span className="flex items-center">
        <span>{column.text}</span>
        {shouldShowDirectionChevron && sortByCriteria.direction === 'desc' && (
          <ChevronUp />
        )}
        {shouldShowDirectionChevron && sortByCriteria.direction === 'asc' && (
          <ChevronDown />
        )}
      </span>
    </SortableHeaderColumn>
  );
};

export default DataTableHeaderCell;
