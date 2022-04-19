import { FC } from 'react';

import ColorItem from '@components/ColorItem';

const Gray: FC = () => (
  <ColorItem
    name="Gray"
    description="Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray."
    pallete={[
      {
        className: 'bg-gray-25',
        shade: 25,
        hex: '#FCFCFD',
      },
      {
        className: 'bg-gray-50',
        shade: 50,
        hex: '#F9FAFB',
      },
      {
        className: 'bg-gray-100',
        shade: 100,
        hex: '#F2F4F7',
      },
      {
        className: 'bg-gray-200',
        shade: 200,
        hex: '#EAECF0',
      },
      {
        className: 'bg-gray-300',
        shade: 300,
        hex: '#D0D5DD',
      },
      {
        className: 'bg-gray-400',
        shade: 400,
        hex: '#98A2B3',
      },
      {
        className: 'bg-gray-500',
        shade: 500,
        hex: '#667085',
      },
      {
        className: 'bg-gray-600',
        shade: 600,
        hex: '#475467',
      },
      {
        className: 'bg-gray-700',
        shade: 700,
        hex: '#344054',
      },
      {
        className: 'bg-gray-800',
        shade: 800,
        hex: '#1D2939',
      },
      {
        className: 'bg-gray-900',
        shade: 900,
        hex: '#101828',
      },
    ]}
  />
);

export default Gray;
