import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { ElementType, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import tw from 'twin.macro';

import Tooltip from '../Tooltip';
import IPagination, { PageNeighbours } from './IPagination';
import PaginationPill from './PaginationPill';
import { LEFT_PAGE, RIGHT_PAGE, fetchPageNumbers } from './utils';

const Pagination: React.FC<IPagination> & {
  Button: ElementType;
} = ({
  className,
  totalItems,
  itemsPerPage,
  pageNeighbours,
  onPageChange,
  currentPage: controlledCurrentPage,
  defaultPage,
  nextButtonRenderer,
  prevButtonRenderer,
  pageButtonRenderer,
  ...props
}) => {
  const [currentPageWeControl, setCurrentPage] = useState<number | string>(
    defaultPage as number,
  );

  const currentPage = controlledCurrentPage || currentPageWeControl;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (!totalItems || totalPages === 1) {
    return null;
  }

  const pages = fetchPageNumbers({
    totalPages,
    pageNeighbours: pageNeighbours as PageNeighbours,
    currentPage: currentPage as number,
  });

  const handleMoveLeft = () => {
    if (controlledCurrentPage) {
      onPageChange(controlledCurrentPage - 1);
      return;
    }

    setCurrentPage((page) => (page as number) - 1);
    onPageChange(currentPage as number);
  };

  const handleMoveRight = () => {
    if (controlledCurrentPage) {
      onPageChange(controlledCurrentPage + 1);
      return;
    }

    setCurrentPage((page) => (page as number) + 1);
    onPageChange(currentPage as number);
  };

  const handleClick = (page: number | string) => {
    if (controlledCurrentPage) {
      onPageChange(page);
      return;
    }

    setCurrentPage(page);
    onPageChange(currentPage as number);
  };

  return (
    <nav
      role="navigation"
      className={twMerge('flex space-x-2 text-sm', className)}
      {...props}
    >
      {pages.map((page) => {
        if (page === LEFT_PAGE) {
          return prevButtonRenderer ? (
            prevButtonRenderer(page, handleMoveLeft)
          ) : (
            <Tooltip key={page} content="Previous page">
              <PaginationPill
                page={-1}
                aria-label="Previous"
                onClick={handleMoveLeft}
              >
                <span aria-hidden="true">
                  <ChevronDoubleLeftIcon className="w-4 h-4" />
                </span>
                <span className="sr-only">Previous</span>
              </PaginationPill>
            </Tooltip>
          );
        }

        if (page === RIGHT_PAGE) {
          return nextButtonRenderer ? (
            nextButtonRenderer(page, handleMoveRight)
          ) : (
            <Tooltip key={page} content="Next page">
              <PaginationPill
                page={-1}
                aria-label="Next"
                onClick={handleMoveRight}
              >
                <span aria-hidden="true">
                  <ChevronDoubleRightIcon className="w-4 h-4" />
                </span>
                <span className="sr-only">Next</span>
              </PaginationPill>
            </Tooltip>
          );
        }

        return pageButtonRenderer ? (
          pageButtonRenderer(page, page, handleClick, page === currentPage)
        ) : (
          <PaginationPill
            page={page}
            aria-label={`Go to page ${page}`}
            key={page}
            onClick={handleClick}
            active={page === currentPage}
          >
            {page}
          </PaginationPill>
        );
      })}
    </nav>
  );
};

Pagination.Button = PaginationPill;

Pagination.defaultProps = {
  defaultPage: 1,
  pageNeighbours: 2 as PageNeighbours,
};

export default Pagination;
