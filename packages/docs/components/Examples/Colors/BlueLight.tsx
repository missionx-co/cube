import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const BlueLight: FC = () => (
  <ColorItem
    name="Blue light"
    pallete={[
      {
        className: 'bg-blue-light-25',
        shade: 25,
        hex: '#F5FBFF',
      },
      {
        className: 'bg-blue-light-50',
        shade: 50,
        hex: '#F0F9FF',
      },
      {
        className: 'bg-blue-light-100',
        shade: 100,
        hex: '#E0F2FE',
      },
      {
        className: 'bg-blue-light-200',
        shade: 200,
        hex: '#B9E6FE',
      },
      {
        className: 'bg-blue-light-300',
        shade: 300,
        hex: '#7CD4FD',
      },
      {
        className: 'bg-blue-light-400',
        shade: 400,
        hex: '#36BFFA',
      },
      {
        className: 'bg-blue-light-500',
        shade: 500,
        hex: '#0BA5EC',
      },
      {
        className: 'bg-blue-light-600',
        shade: 600,
        hex: '#0086C9',
      },
      {
        className: 'bg-blue-light-700',
        shade: 700,
        hex: '#026AA2',
      },
      {
        className: 'bg-blue-light-800',
        shade: 800,
        hex: '#065986',
      },
      {
        className: 'bg-blue-light-900',
        shade: 900,
        hex: '#0B4A6F',
      },
    ]}
  />
);

export default BlueLight;
