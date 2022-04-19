import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const BlueGray: FC = () => (
  <ColorItem
    name="Blue gray"
    pallete={[
      {
        className: 'bg-blue-gray-25',
        shade: 25,
        hex: '#FCFCFD',
      },
      {
        className: 'bg-blue-gray-50',
        shade: 50,
        hex: '#F8F9FC',
      },
      {
        className: 'bg-blue-gray-100',
        shade: 100,
        hex: '#EAECF5',
      },
      {
        className: 'bg-blue-gray-200',
        shade: 200,
        hex: '#D5D9EB',
      },
      {
        className: 'bg-blue-gray-300',
        shade: 300,
        hex: '#AFB5D9',
      },
      {
        className: 'bg-blue-gray-400',
        shade: 400,
        hex: '#717BBC',
      },
      {
        className: 'bg-blue-gray-500',
        shade: 500,
        hex: '#4E5BA6',
      },
      {
        className: 'bg-blue-gray-600',
        shade: 600,
        hex: '#3E4784',
      },
      {
        className: 'bg-blue-gray-700',
        shade: 700,
        hex: '#363F72',
      },
      {
        className: 'bg-blue-gray-800',
        shade: 800,
        hex: '#293056',
      },
      {
        className: 'bg-blue-gray-900',
        shade: 900,
        hex: '#101323',
      },
    ]}
  />
);

export default BlueGray;
