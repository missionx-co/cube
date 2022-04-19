import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Blue: FC = () => (
  <ColorItem
    name="Blue"
    pallete={[
      {
        className: 'bg-blue-25',
        shade: 25,
        hex: '#F5FAFF',
      },
      {
        className: 'bg-blue-50',
        shade: 50,
        hex: '#EFF8FF',
      },
      {
        className: 'bg-blue-100',
        shade: 100,
        hex: '#D1E9FF',
      },
      {
        className: 'bg-blue-200',
        shade: 200,
        hex: '#B2DDFF',
      },
      {
        className: 'bg-blue-300',
        shade: 300,
        hex: '#84CAFF',
      },
      {
        className: 'bg-blue-400',
        shade: 400,
        hex: '#53B1FD',
      },
      {
        className: 'bg-blue-500',
        shade: 500,
        hex: '#2E90FA',
      },
      {
        className: 'bg-blue-600',
        shade: 600,
        hex: '#1570EF',
      },
      {
        className: 'bg-blue-700',
        shade: 700,
        hex: '#175CD3',
      },
      {
        className: 'bg-blue-800',
        shade: 800,
        hex: '#1849A9',
      },
      {
        className: 'bg-blue-900',
        shade: 900,
        hex: '#194185',
      },
    ]}
  />
);

export default Blue;
