import { Select } from '@cube-ui/components';

import Example from '@components/Example';

const options = [
  {
    id: 'one',
    text: 'Option one',
  },
  {
    id: 'two',
    text: 'Option two',
  },
  {
    id: 'three',
    text: 'Option three',
    disabled: true,
  },
  {
    id: 'group',
    text: 'Options group',
    children: [
      {
        id: 'group-one',
        value: 'group-one',
        text: 'Option group - option one',
      },
      {
        id: 'group-two',
        value: 'group-two',
        text: 'Option group - option two',
      },
    ],
  },
];

const BasicUsage = () => (
  <Example>
    <Select placeholder="Please select an option" options={options} />
    <Select placeholder="Please select an option" options={options} disabled />
    <Select placeholder="Please select an option" options={options} error />
  </Example>
);

export default BasicUsage;
