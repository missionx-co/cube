import { Avatar, Combobox } from '@cube-ui/components';
import { FC } from 'react';

import Example from '@components/Example';

import { people } from './FancySelectCustomization';

const ComboboxCustomization: FC = () => {
  return (
    <Example>
      <Combobox
        displayValue={(item: any) => `${item.text} (${item.username})`}
        options={(searchQuery: string) => {
          return Promise.resolve(
            people.filter((person) =>
              person.text
                .toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase()),
            ),
          );
        }}
        optionRenderer={(option, { ref, ...props }) => {
          const person = option as any;
          return (
            <Combobox.Option ref={ref as any} {...props}>
              <Avatar
                image={person.avatar}
                alt={person.text}
                name={person.text}
                subtext={person.username}
              />
            </Combobox.Option>
          );
        }}
      />
    </Example>
  );
};

export default ComboboxCustomization;
