import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { ElementType, useState } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import Tooltip from '../Tooltip';
import IPagination, { PageNeighbours } from './IPagination';
import PaginationPill from './PaginationPill';
import { LEFT_PAGE, RIGHT_PAGE, fetchPageNumbers } from './utils';

const PaginationContainer: StyledComponentType<any> = styled(
  'nav',
  tw`flex space-x-2`,
);

const ChevronDoubleLeftIconContainer: StyledComponentType<any> = styled(
  ChevronDoubleLeftIcon,
  tw`w-4 h-4`,
);

const ChevronDoubleRightIconContainer: StyledComponentType<any> = styled(
  ChevronDoubleRightIcon,
  tw`w-4 h-4`,
);

const SROnly: StyledComponentType<any> = styled('span', tw`sr-only`);

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
    <PaginationContainer role="navigation" className={className} {...props}>
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
                  <ChevronDoubleLeftIconContainer />
                </span>
                <SROnly>Previous</SROnly>
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
                  <ChevronDoubleRightIconContainer />
                </span>
                <SROnly>Next</SROnly>
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
    </PaginationContainer>
  );
};

Pagination.Button = PaginationPill;

Pagination.defaultProps = {
  defaultPage: 1,
  pageNeighbours: 2 as PageNeighbours,
};

export default Pagination;
