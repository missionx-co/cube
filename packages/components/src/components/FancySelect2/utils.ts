import { Option } from './IFancySelect';

export const flattenOptions = (options: Option[]) => {
  return options.reduce<Option[]>((values, option) => {
    if (option.children) {
      values.push(...flattenOptions(option.children));
    } else {
      values.push(option);
    }
    return values;
  }, []);
};
