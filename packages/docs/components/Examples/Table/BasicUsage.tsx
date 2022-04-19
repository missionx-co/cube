import React from 'react';

import { Table } from '@cube/components';

import Example from '@components/Example';

const headings = [
  {
    key: 'userId',
    value: 'User ID',
  },
  {
    key: 'firstName',
    value: 'Firstname',
  },
  {
    key: 'lastName',
    value: 'Lastname',
  },
  {
    key: 'emailAddress',
    value: 'Email',
  },
  {
    key: 'gender',
    value: 'Gender',
  },
  {
    key: 'phoneNumber',
    value: 'Phone',
  },
];

const users = [
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

const BasicUsage: React.FC = () => (
  <Example>
    <Table>
      <thead>
        <Table.Row>
          {headings.map((heading) => (
            <Table.HeaderCell key={heading.key}>
              {heading.value}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </thead>
      <tbody>
        {users.map((user) => (
          <Table.Row key={user.userId}>
            {headings.map((heading) => (
              <Table.Cell key={`${user.userId}-${heading.key}`}>
                {/* @ts-ignore */}
                {user[heading.key]}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </tbody>
    </Table>
  </Example>
);
export default BasicUsage;
