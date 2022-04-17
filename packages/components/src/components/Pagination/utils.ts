export const LEFT_PAGE = 'LEFT';
export const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
export const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export const fetchPageNumbers = ({
  totalPages,
  pageNeighbours,
  currentPage,
}: {
  totalPages: number;
  pageNeighbours: number;
  currentPage: number;
}) => {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages <= totalBlocks) {
    return range(1, totalPages);
  }

  const startPage = Math.max(2, currentPage - pageNeighbours);
  const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
  let pages: (number | string)[] = range(startPage, endPage);

  /**
   * hasLeftSpill: has hidden pages to the left
   * hasRightSpill: has hidden pages to the right
   * spillOffset: number of hidden pages either to the left or to the right
   */
  const hasLeftSpill = startPage > 2;
  const hasRightSpill = totalPages - endPage > 1;
  const spillOffset = totalNumbers - (pages.length + 1);

  switch (true) {
    // handle: (1) < {5 6} [7] {8 9} (10)
    case hasLeftSpill && !hasRightSpill: {
      const extraPages = range(startPage - spillOffset, startPage - 1);
      pages = [LEFT_PAGE, ...extraPages, ...pages];
      break;
    }

    // handle: (1) {2 3} [4] {5 6} > (10)
    case !hasLeftSpill && hasRightSpill: {
      const extraPages = range(endPage + 1, endPage + spillOffset);
      pages = [...pages, ...extraPages, RIGHT_PAGE];
      break;
    }

    // handle: (1) < {4 5} [6] {7 8} > (10)
    case hasLeftSpill && hasRightSpill:
    default: {
      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
      break;
    }
  }

  return [1, ...pages, totalPages];
};
