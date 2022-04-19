import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Purple: FC = () => (
  <ColorItem
    name="Purple"
    pallete={[
      {
        className: 'bg-purple-25',
        shade: 25,
        hex: '#FAFAFF',
      },
      {
        className: 'bg-purple-50',
        shade: 50,
        hex: '#F4F3FF',
      },
      {
        className: 'bg-purple-100',
        shade: 100,
        hex: '#EBE9FE',
      },
      {
        className: 'bg-purple-200',
        shade: 200,
        hex: '#D9D6FE',
      },
      {
        className: 'bg-purple-300',
        shade: 300,
        hex: '#BDB4FE',
      },
      {
        className: 'bg-purple-400',
        shade: 400,
        hex: '#9B8AFB',
      },
      {
        className: 'bg-purple-500',
        shade: 500,
        hex: '#7A5AF8',
      },
      {
        className: 'bg-purple-600',
        shade: 600,
        hex: '#6938EF',
      },
      {
        className: 'bg-purple-700',
        shade: 700,
        hex: '#5925DC',
      },
      {
        className: 'bg-purple-800',
        shade: 800,
        hex: '#4A1FB8',
      },
      {
        className: 'bg-purple-900',
        shade: 900,
        hex: '#3E1C96',
      },
    ]}
  />
);

export default Purple;
