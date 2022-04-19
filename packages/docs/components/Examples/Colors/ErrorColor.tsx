import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Error: FC = () => (
  <ColorItem
    name="Error"
    description="Error colors are used across error states and in 'destructive' actions. They communicate a destructive/negative action, such as removing a user from your team."
    pallete={[
      {
        className: 'bg-error-25',
        shade: 25,
        hex: '#FFFBFA',
      },
      {
        className: 'bg-error-50',
        shade: 50,
        hex: '#FEF3F2',
      },
      {
        className: 'bg-error-100',
        shade: 100,
        hex: '#FEE4E2',
      },
      {
        className: 'bg-error-200',
        shade: 200,
        hex: '#FECDCA',
      },
      {
        className: 'bg-error-300',
        shade: 300,
        hex: '#FDA29B',
      },
      {
        className: 'bg-error-400',
        shade: 400,
        hex: '#F97066',
      },
      {
        className: 'bg-error-500',
        shade: 500,
        hex: '#F04438',
      },
      {
        className: 'bg-error-600',
        shade: 600,
        hex: '#D92D20',
      },
      {
        className: 'bg-error-700',
        shade: 700,
        hex: '#B42318',
      },
      {
        className: 'bg-error-800',
        shade: 800,
        hex: '#912018',
      },
      {
        className: 'bg-error-900',
        shade: 900,
        hex: '#7A271A',
      },
    ]}
  />
);

export default Error;
