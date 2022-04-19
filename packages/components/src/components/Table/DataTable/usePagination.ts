import { drop } from 'lodash';
import { useMemo, useState } from 'react';

import IPagination from '../../Pagination/IPagination';

const getPaginatedItems = (items: any[], page: number, pageSize: number) => {
  var pg = page || 1,
    pgSize = pageSize || 100,
    offset = (pg - 1) * pgSize;
  return drop(items, offset).slice(0, pgSize);
};

type PaginationType = Omit<IPagination, 'currentPage' | 'onPageChange'> & {
  onPageChange?: (page: number) => any;
};

const usePagination = (
  items: any[],
  idsString: string,
  itemsLength: number,
  pagination?: PaginationType,
) => {
  if (!pagination) {
    return {
      currentPage: 1,
      paginatedData: items,
      onPageChange: () => {},
    };
  }

  const pg = {
    defaultPage: 1,
    currentPage: undefined,
    ...(pagination || {}),
  };

  // in case paginationCurrentPage is not set then we'll fallback to currentPageWeControl
  const [currentPageWeControl, setCurrentPage] = useState(pg.defaultPage);

  const currentPage = pg.currentPage || currentPageWeControl;

  const paginatedData = useMemo(() => {
    if (!pagination || itemsLength !== pg.totalItems) {
      return items;
    }
    return getPaginatedItems(items, currentPage, pg.itemsPerPage);
  }, [
    items,
    idsString,
    itemsLength,
    currentPage,
    pg.itemsPerPage,
    pg.totalItems,
  ]);

  const onPageChange = (page: number | string) => {
    setCurrentPage(page as number);
    pg.onPageChange && pg.onPageChange(page as number);
  };

  return {
    currentPage,
    paginatedData,
    onPageChange,
  };
};

export default usePagination;
