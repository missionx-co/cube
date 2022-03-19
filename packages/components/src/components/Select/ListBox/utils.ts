import { Option } from "../ISelect";

const cache: any = {};

export const findOption = (options: Option[], key: any) => {
  if (cache[key]) {
    return cache[key];
  }
  const found = options.find((option) => option.id == key);
  if (!found) {
    return undefined;
  }

  cache[key] = found;
  return found;
};
