import { FC } from 'react';

import { Avatar, FancySelect2 } from '@cube/components';

import Example from '@components/Example';

const people = [
  {
    id: '@gilberto_miguel',
    value: '@gilberto_miguel',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Gilberto Miguel',
    username: '@gilberto_miguel',
  },
  {
    id: '@mpettegree',
    value: '@mpettegree',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Maia Pettegree',
    username: '@mpettegree',
  },
  {
    id: '@redington',
    value: '@redington',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Wade Redington',
    username: '@redington',
  },
  {
    id: '@kurtis',
    value: '@kurtis',
    avatar:
      'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Kurtis Gurrado',
    username: '@kurtis',
  },
  {
    id: '@sbalmann',
    value: '@sbalmann',
    avatar:
      'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Sonja Balmann',
    username: '@sbalmann',
  },
  {
    id: '@brent_m',
    value: '@brent_m',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Brent Mickelwright',
    username: '@brent_m',
  },
];

const FancySelectCustomization: FC = () => (
  <Example>
    <FancySelect2
      placeholder="Please select a user account"
      options={people}
      inputRenderer={({ option, ref, ...props }) => {
        const selected = option as any;
        return (
          <FancySelect2.Input ref={ref as any} {...props}>
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
          </FancySelect2.Input>
        );
      }}
      optionRenderer={(option, props) => {
        const person = option as any;
        return (
          <FancySelect2.Option
            {...props}
            className="justify-start space-x-3 border border-gray-200 border-dotted"
          >
            <Avatar
              image={person.avatar}
              alt={person.text}
              name={person.text}
              subtext={person.username}
            />
          </FancySelect2.Option>
        );
      }}
    />
  </Example>
);

export default FancySelectCustomization;
