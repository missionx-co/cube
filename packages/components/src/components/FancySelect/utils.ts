import { omit } from 'lodash';

import { Option, ProcessedOption } from './IFancySelect';

export const flattenOptions = (options: Option[]) => {
  return options.reduce<ProcessedOption[]>((values, option) => {
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
  }, []);
};

export const flattenOptionsAndAddIndex = (options: Option[]) => {
  let optionIndex = 0;
  return flattenOptions(options).map((option) => {
    if (option.presentation) {
      return option;
    }

    option.index = optionIndex++;
    return option;
  });
};
