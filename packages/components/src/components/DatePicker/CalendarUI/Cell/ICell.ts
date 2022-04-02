import { ReactNode } from 'react';

export interface CellState {
  isFirstOfRange?: boolean;
  isLastOfRange?: boolean;
  selected?: boolean;
  hovered?: boolean;
  outOfRange?: boolean;
  blocked?: boolean;
}

export default interface ICell extends CellState {
  date?: Date;
  className?: string;
  children?: ReactNode;
  onSelect?: (date: Date) => any;
  onHover?: (date?: Date) => any;
  isWeekdayLabel?: boolean;
}
