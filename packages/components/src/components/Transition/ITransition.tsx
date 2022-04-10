import { ElementType, HTMLProps } from 'react';

interface ITransition extends Omit<HTMLProps<HTMLElement>, 'as'> {
  show: boolean;
  as?: ElementType;
  enter?: string;
  exit?: string;
  duration?: number;
  [key: string]: any;
}

export default ITransition;
