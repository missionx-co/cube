import { HTMLProps } from 'react';

export default interface IPaginationPill
  extends Omit<HTMLProps<HTMLButtonElement>, 'onClick'> {
  page: number | string;
  onClick?: (page: number | string) => any;
  active?: boolean;
}
