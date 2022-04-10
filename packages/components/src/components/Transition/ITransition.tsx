import {
  ComponentPropsWithRef,
  ElementType,
  HTMLProps,
  ReactElement,
} from 'react';

export type ComponentAsKey = keyof JSX.IntrinsicElements;
export type ComponentAs<T extends ComponentAsKey> = JSX.IntrinsicElements[T];
export type ComponentAsProps<T extends ComponentAsKey> = Omit<
  ComponentAs<T>,
  'className' | 'ref'
>;

interface ITransition<T extends ElementType = 'div'>
  extends Omit<HTMLProps<HTMLElement>, 'as'> {
  show: boolean;
  as?: T;
  enter?: string;
  exit?: string;
  duration?: number;
}

export default ITransition;
