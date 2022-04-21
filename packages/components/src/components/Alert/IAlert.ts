import { Color } from '@cube-ui/foundation';
import { HTMLProps } from 'react';

export type AlertVariant = 'light' | 'filled';

export default interface IAlert extends HTMLProps<HTMLDivElement> {
  color?: Extract<Color, 'primary' | 'error' | 'warning' | 'success'>;
  variant?: AlertVariant;
}
