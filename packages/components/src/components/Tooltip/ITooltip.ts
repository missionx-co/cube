import { Placement } from '@floating-ui/dom';
import { HTMLProps, ReactNode } from 'react';

export default interface ITooltip {
  content: ReactNode | ((close: () => void) => ReactNode);
  placement?: Placement;
  showOn?: 'click' | 'hover';
  className?: string;
  transition?: {
    duration?: number;
    enter?: string;
    exit?: string;
  };
}
