import { litteral } from '../utils';

export const propsList = [
  {
    name: 'area',
    type: litteral(['sm', 'base', 'lg', 'xl', '2xl']),
    default: 'base',
  },
  {
    name: 'color',
    type: litteral(['primary', 'error', 'success']),
    default: 'primary',
  },
  {
    name: 'variant',
    type: litteral(['fill', 'light', 'outline', 'link']),
    default: 'fill',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
  },
];
