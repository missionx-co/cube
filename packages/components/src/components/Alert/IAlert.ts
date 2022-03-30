import { Color } from '@cube/foundation';
import { ReactNode } from 'react';

export type AlertVariant = 'light' | 'filled';

export default interface IAlert {
  color?: Extract<Color, 'primary' | 'error' | 'warning' | 'success'>;
  variant?: AlertVariant;
  icon?: boolean | (() => ReactNode);
}
