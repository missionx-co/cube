import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Indigo: FC = () => (
  <ColorItem
    name="Indigo"
    pallete={[
      {
        className: 'bg-indigo-25',
        shade: 25,
        hex: '#F5F8FF',
      },
      {
        className: 'bg-indigo-50',
        shade: 50,
        hex: '#EEF4FF',
      },
      {
        className: 'bg-indigo-100',
        shade: 100,
        hex: '#E0EAFF',
      },
      {
        className: 'bg-indigo-200',
        shade: 200,
        hex: '#C7D7FE',
      },
      {
        className: 'bg-indigo-300',
        shade: 300,
        hex: '#A4BCFD',
      },
      {
        className: 'bg-indigo-400',
        shade: 400,
        hex: '#8098F9',
      },
      {
        className: 'bg-indigo-500',
        shade: 500,
        hex: '#6172F3',
      },
      {
        className: 'bg-indigo-600',
        shade: 600,
        hex: '#444CE7',
      },
      {
        className: 'bg-indigo-700',
        shade: 700,
        hex: '#3538CD',
      },
      {
        className: 'bg-indigo-800',
        shade: 800,
        hex: '#2D31A6',
      },
      {
        className: 'bg-indigo-900',
        shade: 900,
        hex: '#2D3282',
      },
    ]}
  />
);

export default Indigo;
