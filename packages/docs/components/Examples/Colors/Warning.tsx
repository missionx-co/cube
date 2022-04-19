import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Warning: FC = () => (
  <ColorItem
    name="Warning"
    description={`Warning colors can communicate that an action is potentially destructive or \"on-hold". These colors are commonly used in confirmations to grab the users' attention.`}
    pallete={[
      {
        className: 'bg-warning-25',
        shade: 25,
        hex: '#FFFCF5',
      },
      {
        className: 'bg-warning-50',
        shade: 50,
        hex: '#FFFAEB',
      },
      {
        className: 'bg-warning-100',
        shade: 100,
        hex: '#FEF0C7',
      },
      {
        className: 'bg-warning-200',
        shade: 200,
        hex: '#FEDF89',
      },
      {
        className: 'bg-warning-300',
        shade: 300,
        hex: '#FEC84B',
      },
      {
        className: 'bg-warning-400',
        shade: 400,
        hex: '#FDB022',
      },
      {
        className: 'bg-warning-500',
        shade: 500,
        hex: '#F79009',
      },
      {
        className: 'bg-warning-600',
        shade: 600,
        hex: '#DC6803',
      },
      {
        className: 'bg-warning-700',
        shade: 700,
        hex: '#B54708',
      },
      {
        className: 'bg-warning-800',
        shade: 800,
        hex: '#93370D',
      },
      {
        className: 'bg-warning-900',
        shade: 900,
        hex: '#7A2E0E',
      },
    ]}
  />
);

export default Warning;
