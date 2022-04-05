import { Color } from '@cube/foundation';
import { HTMLProps } from 'react';

export type AlertVariant = 'light' | 'filled';

export default interface IAlert extends HTMLProps<HTMLDivElement> {
  color?: Extract<Color, 'primary' | 'error' | 'warning' | 'success'>;
  variant?: AlertVariant;
}
