import { HTMLProps, ReactNode } from 'react';

export type PageNeighbours = 0 | 1 | 2;

export default interface Pagination extends HTMLProps<HTMLElement> {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number | string) => any;
  pageNeighbours?: PageNeighbours;
  currentPage?: number;
  defaultPage?: number;
  nextButtonRenderer?: (key: number | string, onClick: () => any) => ReactNode;
  prevButtonRenderer?: (key: number | string, onClick: () => any) => ReactNode;
  pageButtonRenderer?: (
    page: number | string,
    key: number | string,
    onClick: (page: number) => any,
    current: boolean,
  ) => ReactNode;
}
