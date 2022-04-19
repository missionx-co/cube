import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Orange: FC = () => (
  <ColorItem
    name="Orange"
    pallete={[
      {
        className: 'bg-orange-25',
        shade: 25,
        hex: '#FFFAF5',
      },
      {
        className: 'bg-orange-50',
        shade: 50,
        hex: '#FFF6ED',
      },
      {
        className: 'bg-orange-100',
        shade: 100,
        hex: '#FFEAD5',
      },
      {
        className: 'bg-orange-200',
        shade: 200,
        hex: '#FDDCAB',
      },
      {
        className: 'bg-orange-300',
        shade: 300,
        hex: '#FEB273',
      },
      {
        className: 'bg-orange-400',
        shade: 400,
        hex: '#FD853A',
      },
      {
        className: 'bg-orange-500',
        shade: 500,
        hex: '#FB6514',
      },
      {
        className: 'bg-orange-600',
        shade: 600,
        hex: '#EC4A0A',
      },
      {
        className: 'bg-orange-700',
        shade: 700,
        hex: '#C4320A',
      },
      {
        className: 'bg-orange-800',
        shade: 800,
        hex: '#9C2A10',
      },
      {
        className: 'bg-orange-900',
        shade: 900,
        hex: '#7E2410',
      },
    ]}
  />
);

export default Orange;
