import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';

import Checkbox from '../../Checkbox';
import Pagination from '../../Pagination';
import Table from '../index';
import DataTableHeaderCell from './DataTableHeaderCell';
import IDataTable from './IDataTable';
import defaultProps from './default-props';
import useDataSort from './useDataSort';
import usePagination from './usePagination';
import useRowSelect from './useRowSelect';

const DataTable: React.FC<IDataTable> = ({
  columns,
  items,
  rowProps,
  headerColumnProps,
  bodyColumnProps,
  loading,
  emptyMessage,
  uniqueKey,
  onRowSelected,
  onSort: controlledOnSort,
  pagination,
  headerCheckboxAriaLabel,
  checkboxAriaLabel,
  ...props
}) => {
  const {
    selectedRows,
    isAllSelected,
    isSomeSelected,
    toggleRowSelection,
    toggleAllSelection,
  } = useRowSelect(items, uniqueKey, onRowSelected);

  const { sortBy, sortedData, onSort } = useDataSort(
    columns,
    items,
    controlledOnSort,
  );

  const { currentPage, paginatedData, onPageChange } = usePagination(
    sortedData,
    sortedData.map((item) => item[uniqueKey]).join('-'), // a workaround to force re-pagination of the new data
    items.length,
    pagination,
  );

  return (
    <React.Fragment>
      <Table {...props}>
        <thead>
          <Table.Row {...rowProps}>
            {onRowSelected && (
              <Table.HeaderCell>
                <Checkbox
                  aria-label={headerCheckboxAriaLabel}
                  checked={isSomeSelected || isAllSelected}
                  onChange={toggleAllSelection}
                  icon={
                    isSomeSelected ? (
                      <span className="bg-primary-500 block w-2 h-px" />
                    ) : (
                      <CheckIcon />
                    )
                  }
                />
              </Table.HeaderCell>
            )}
            {columns.map((column) => (
              <DataTableHeaderCell
                key={column.key}
                cellProps={headerColumnProps}
                onSort={onSort}
                sortByCriteria={sortBy}
                column={column}
              />
            ))}
          </Table.Row>
        </thead>

        <tbody>
          {loading && (
            <Table.Row>
              <Table.Cell
                className="text-center"
                colSpan={columns.length + (onRowSelected ? 1 : 0)}
              >
                Loading...
              </Table.Cell>
            </Table.Row>
          )}
          {!loading && sortedData.length === 0 && (
            <Table.Row>
              <Table.Cell
                className="text-center"
                colSpan={columns.length + (onRowSelected ? 1 : 0)}
              >
                {emptyMessage}
              </Table.Cell>
            </Table.Row>
          )}
          {!loading &&
            paginatedData.length > 0 &&
            paginatedData.map((row) => (
              <Table.Row {...rowProps} key={row[uniqueKey]}>
                {onRowSelected && (
                  <Table.Cell>
                    <Checkbox
                      aria-label={checkboxAriaLabel && checkboxAriaLabel(row)}
                      checked={selectedRows.includes(row[uniqueKey])}
                      onChange={(checked) =>
                        toggleRowSelection(row[uniqueKey], checked)
                      }
                    />
                  </Table.Cell>
                )}
                {columns.map((column) => (
                  <Table.Cell
                    key={`${row[uniqueKey]}-${column.key}`}
                    {...bodyColumnProps}
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </tbody>
      </Table>
      {pagination && items.length > 0 && (
        <div className="flex items-center justify-end w-full mt-3">
          <Pagination
            {...pagination}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </React.Fragment>
  );
};

DataTable.defaultProps = defaultProps;

export default DataTable;
