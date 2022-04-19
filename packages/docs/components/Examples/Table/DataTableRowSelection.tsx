import React from 'react';

import { Avatar, Badge, DataTable } from '@cube/components';

import Example from '@components/Example';

import { users } from './DataTableBasicUsage';

export const headings = [
  {
    key: 'user',
    text: 'User',
    render: (row: any) => {
      return (
        <Avatar
          alternativeNode={row.firstName.charAt(0) + row.lastName.charAt(0)}
          name={`${row.firstName} ${row.lastName}`}
          subtext={row.emailAddress}
        />
      );
    },
  },
  {
    key: 'gender',
    text: 'Gender',
    render: (row: any) => {
      if (row.gender === 'Male') {
        return (
          <Badge area="lg" color="blue">
            Male
          </Badge>
        );
      }

      return (
        <Badge area="lg" color="pink">
          Female
        </Badge>
      );
    },
  },
  {
    key: 'phoneNumber',
    text: 'Phone',
  },
];

const DataTableRowSelection: React.FC = () => (
  <Example>
    <DataTable
      uniqueKey="userId"
      columns={headings}
      items={users}
      onRowSelected={(selected: any[]) => console.log(selected)}
      headerCheckboxAriaLabel="Table select state."
      checkboxAriaLabel={(row: any) =>
        `Select ${row.firstName} ${row.lastName}`
      }
    />
  </Example>
);
export default DataTableRowSelection;
