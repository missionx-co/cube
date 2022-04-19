import { HTMLProps, ReactNode } from 'react';

export default interface ITable extends HTMLProps<HTMLTableElement> {
  before?: ReactNode;
  after?: ReactNode;
  tableWrapperClassName?: string;
}
