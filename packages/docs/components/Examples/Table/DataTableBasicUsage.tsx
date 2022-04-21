import { DataTable } from '@cube-ui/components';
import React from 'react';

import Example from '@components/Example';

export const headings = [
  {
    key: 'firstName',
    text: 'Firstname',
  },
  {
    key: 'lastName',
    text: 'Lastname',
  },
  {
    key: 'emailAddress',
    text: 'Email',
  },
  {
    key: 'gender',
    text: 'Gender',
  },
  {
    key: 'phoneNumber',
    text: 'Phone',
  },
];

export const users = [
  {
    userId: 1,
    firstName: 'Cort',
    lastName: 'Tosh',
    emailAddress: 'ctosh0@github.com',
    gender: 'Male',
    phoneNumber: '327-626-5542',
  },
  {
    userId: 2,
    firstName: 'Brianne',
    lastName: 'Dzeniskevich',
    emailAddress: 'bdzeniskevich1@hostgator.com',
    gender: 'Female',
    phoneNumber: '144-190-8956',
  },
  {
    userId: 3,
    firstName: 'Isadore',
    lastName: 'Botler',
    emailAddress: 'ibotler2@gmpg.org',
    gender: 'Male',
    phoneNumber: '350-937-0792',
  },
  {
    userId: 4,
    firstName: 'Janaya',
    lastName: 'Klosges',
    emailAddress: 'jklosges3@amazon.de',
    gender: 'Female',
    phoneNumber: '502-438-7799',
  },
  {
    userId: 5,
    firstName: 'Freddi',
    lastName: 'Di Claudio',
    emailAddress: 'fdiclaudio4@phoca.cz',
    gender: 'Female',
    phoneNumber: '265-448-9627',
  },
  {
    userId: 6,
    firstName: 'Oliy',
    lastName: 'Mairs',
    emailAddress: 'omairs5@fda.gov',
    gender: 'Female',
    phoneNumber: '221-516-2295',
  },
  {
    userId: 7,
    firstName: 'Tabb',
    lastName: 'Wiseman',
    emailAddress: 'twiseman6@friendfeed.com',
    gender: 'Male',
    phoneNumber: '171-817-5020',
  },
];

const DataTableBasicUsage: React.FC = () => (
  <Example>
    <DataTable uniqueKey="userId" columns={headings} items={users} />
  </Example>
);
export default DataTableBasicUsage;
