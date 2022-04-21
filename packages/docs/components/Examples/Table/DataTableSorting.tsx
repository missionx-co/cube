import { Avatar, Badge, DataTable } from '@cube-ui/components';
import React from 'react';

import Example from '@components/Example';

import { users } from './DataTableBasicUsage';

export const headings = [
  {
    key: 'userId',
    text: 'User ID',
    sort: (a: any, b: any) => {
      if (a.userId > b.userId) {
        return 1;
      }

      if (a.userId < b.userId) {
        return -1;
      }

      return 0;
    },
  },
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

const DataTableSorting: React.FC = () => (
  <Example>
    <DataTable uniqueKey="userId" columns={headings} items={users} />
  </Example>
);
export default DataTableSorting;
