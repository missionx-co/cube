import { omit } from 'lodash';

import { Option } from './IFancySelect';

export const flattenOptions = (options: Option[]) => {
  return options.reduce<(Option & { presentation?: boolean })[]>(
    (values, option) => {
      if (option.children) {
        values.push({
          ...omit(option, 'children'),
          presentation: true,
        });

        values.push(...flattenOptions(option.children));
      } else {
        values.push(option);
      }
      return values;
    },
    [],
  );
};
