import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Primary: FC = () => (
  <ColorItem
    name="Primary"
    description="The primary color is your 'brand' color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion."
    pallete={[
      {
        className: 'bg-primary-25',
        shade: 25,
        hex: '#FCFAFF',
      },
      {
        className: 'bg-primary-50',
        shade: 50,
        hex: '#F9F5FF',
      },
      {
        className: 'bg-primary-100',
        shade: 100,
        hex: '#F4EBFF',
      },
      {
        className: 'bg-primary-200',
        shade: 200,
        hex: '#E9D7FE',
      },
      {
        className: 'bg-primary-300',
        shade: 300,
        hex: '#D6BBFB',
      },
      {
        className: 'bg-primary-400',
        shade: 400,
        hex: '#B692F6',
      },
      {
        className: 'bg-primary-500',
        shade: 500,
        hex: '#9E77ED',
      },
      {
        className: 'bg-primary-600',
        shade: 600,
        hex: '#7F56D9',
      },
      {
        className: 'bg-primary-700',
        shade: 700,
        hex: '#6941C6',
      },
      {
        className: 'bg-primary-800',
        shade: 800,
        hex: '#53389E',
      },
      {
        className: 'bg-primary-900',
        shade: 900,
        hex: '#42307D',
      },
    ]}
  />
);

export default Primary;
