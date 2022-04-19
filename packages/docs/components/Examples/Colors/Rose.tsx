import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Rose: FC = () => (
  <ColorItem
    name="Rose"
    pallete={[
      {
        className: 'bg-rose-25',
        shade: 25,
        hex: '#FFF5F6',
      },
      {
        className: 'bg-rose-50',
        shade: 50,
        hex: '#FFF1F3',
      },
      {
        className: 'bg-rose-100',
        shade: 100,
        hex: '#FFE4E8',
      },
      {
        className: 'bg-rose-200',
        shade: 200,
        hex: '#FECDD6',
      },
      {
        className: 'bg-rose-300',
        shade: 300,
        hex: '#FEA3B4',
      },
      {
        className: 'bg-rose-400',
        shade: 400,
        hex: '#FD6F8E',
      },
      {
        className: 'bg-rose-500',
        shade: 500,
        hex: '#F63D68',
      },
      {
        className: 'bg-rose-600',
        shade: 600,
        hex: '#E31B54',
      },
      {
        className: 'bg-rose-700',
        shade: 700,
        hex: '#C01048',
      },
      {
        className: 'bg-rose-800',
        shade: 800,
        hex: '#A11043',
      },
      {
        className: 'bg-rose-900',
        shade: 900,
        hex: '#89123E',
      },
    ]}
  />
);

export default Rose;
