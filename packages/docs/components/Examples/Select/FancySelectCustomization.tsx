import { Avatar, FancySelect } from '@cube-ui/components';
import { FC, useState } from 'react';

import Example from '@components/Example';

export const people = [
  {
    value: '@gilberto_miguel',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Gilberto Miguel',
    username: '@gilberto_miguel',
  },
  {
    value: '@mpettegree',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Maia Pettegree',
    username: '@mpettegree',
  },
  {
    value: '@redington',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Wade Redington',
    username: '@redington',
  },
  {
    value: '@kurtis',
    avatar:
      'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Kurtis Gurrado',
    username: '@kurtis',
  },
  {
    value: '@sbalmann',
    avatar:
      'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Sonja Balmann',
    username: '@sbalmann',
  },
  {
    value: '@brent_m',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Brent Mickelwright',
    username: '@brent_m',
  },
];

const FancySelectCustomization: FC = () => (
  <Example>
    <FancySelect
      placeholder="Please select a user account"
      options={people}
      inputRenderer={({ option, ref, ...props }) => {
        const selected = option as any;
        return (
          <FancySelect.Input ref={ref as any} {...props}>
            {selected ? (
              <Avatar
                image={selected.avatar}
                alt={selected.text}
                name={selected.text}
                subtext={selected.username}
              />
            ) : (
              <Avatar
                alt="Select a user"
                name="Select a user"
                subtext="Select a user from the available users list"
              />
            )}
          </FancySelect.Input>
        );
      }}
      optionRenderer={(option, { ref, ...props }) => {
        const person = option as any;
        return (
          <FancySelect.Option
            {...props}
            ref={ref as any}
            className="justify-start space-x-3 border border-gray-200 border-dotted"
          >
            <Avatar
              image={person.avatar}
              alt={person.text}
              name={person.text}
              subtext={person.username}
            />
          </FancySelect.Option>
        );
      }}
    />
  </Example>
);

export default FancySelectCustomization;
