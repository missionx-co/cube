import { HTMLProps } from 'react';

export default interface IHeader extends HTMLProps<HTMLElement> {
  month: Date;
  onNextMonthClick: () => any;
  onNextYearClick: () => any;
  onPreviousMonthClick: () => any;
  onPreviousYearClick: () => any;
}
