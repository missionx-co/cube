import { Color } from '@cube-ui/foundation';
import { HTMLProps } from 'react';

export default interface IBadge extends HTMLProps<HTMLSpanElement> {
  color?: Color;
  area?: 'sm' | 'base' | 'lg';
}
