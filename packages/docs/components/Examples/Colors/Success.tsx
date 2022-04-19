import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Success: FC = () => (
  <ColorItem
    name="Success"
    description={`Success colors communicate a positive action, postive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.`}
    pallete={[
      {
        className: 'bg-success-25',
        shade: 25,
        hex: '#F6FEF9',
      },
      {
        className: 'bg-success-50',
        shade: 50,
        hex: '#ECFDF3',
      },
      {
        className: 'bg-success-100',
        shade: 100,
        hex: '#D1FADF',
      },
      {
        className: 'bg-success-200',
        shade: 200,
        hex: '#A6F4C5',
      },
      {
        className: 'bg-success-300',
        shade: 300,
        hex: '#6CE9A6',
      },
      {
        className: 'bg-success-400',
        shade: 400,
        hex: '#32D583',
      },
      {
        className: 'bg-success-500',
        shade: 500,
        hex: '#12B76A',
      },
      {
        className: 'bg-success-600',
        shade: 600,
        hex: '#039855',
      },
      {
        className: 'bg-success-700',
        shade: 700,
        hex: '#027A48',
      },
      {
        className: 'bg-success-800',
        shade: 800,
        hex: '#05603A',
      },
      {
        className: 'bg-success-900',
        shade: 900,
        hex: '#054F31',
      },
    ]}
  />
);

export default Success;
