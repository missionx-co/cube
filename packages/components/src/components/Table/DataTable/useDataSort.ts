import { useMemo, useState } from 'react';

import { OnSort, SortDirection } from './IDataTable';
import IDataTableColumn from './IDataTableColumn';

const useDataSort = (
  columns: IDataTableColumn[],
  data: any[],
  controlledOnSort?: OnSort,
) => {
  const [sortBy, updateSortCriteria] = useState<{
    key: string;
    direction: SortDirection;
  }>({ key: 'none', direction: 'asc' });

  const sortedData = useMemo(() => {
    // don't go down the road if there's no data
    if (data.length === 0) {
      return data;
    }
    // don't sort data because it'll be sorted by the user
    if (typeof controlledOnSort === 'function') {
      return data;
    }

    if (sortBy.key === 'none') {
      return data;
    }

    // find column
    const column = columns.find(({ key }) => key === sortBy.key);
    if (!column || !column.sort) {
      return data;
    }

    const sortFn = column.sort;

    return data.sort((a, b) => {
      const result = sortFn(a, b);
      if (sortBy.direction === 'desc') {
        return result * -1;
      }
      return result;
    });
  }, [data, sortBy, controlledOnSort]);

  const onSort = (key: string) => {
    updateSortCriteria((criteria) => {
      // sort by same old criteria key but different direction
      if (criteria.key === key) {
        // reverse the sorting direction
        return {
          ...criteria,
          direction: criteria.direction === 'asc' ? 'desc' : 'asc',
        };
      }

      // sort by different key
      return {
        key,
        direction: 'asc',
      };
    });

    controlledOnSort && controlledOnSort(sortBy);
  };

  return {
    sortBy,
    sortedData,
    onSort,
  };
};

export default useDataSort;
