import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Pink: FC = () => (
  <ColorItem
    name="Pink"
    pallete={[
      {
        className: 'bg-pink-25',
        shade: 25,
        hex: '#FEF6FB',
      },
      {
        className: 'bg-pink-50',
        shade: 50,
        hex: '#FDF2FA',
      },
      {
        className: 'bg-pink-100',
        shade: 100,
        hex: '#FCE7F6',
      },
      {
        className: 'bg-pink-200',
        shade: 200,
        hex: '#FCCEEE',
      },
      {
        className: 'bg-pink-300',
        shade: 300,
        hex: '#FAA7E0',
      },
      {
        className: 'bg-pink-400',
        shade: 400,
        hex: '#F670C7',
      },
      {
        className: 'bg-pink-500',
        shade: 500,
        hex: '#EE46BC',
      },
      {
        className: 'bg-pink-600',
        shade: 600,
        hex: '#DD2590',
      },
      {
        className: 'bg-pink-700',
        shade: 700,
        hex: '#C11574',
      },
      {
        className: 'bg-pink-800',
        shade: 800,
        hex: '#9E165F',
      },
      {
        className: 'bg-pink-900',
        shade: 900,
        hex: '#851651',
      },
    ]}
  />
);

export default Pink;
