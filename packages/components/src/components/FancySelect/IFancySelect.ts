import { Key, ReactNode, LegacyRef } from "react";
import { Option } from "../Select/ISelect";

export type FancySelectOption = Omit<Option, "children">;

export interface sharedProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export default interface IFancySelect extends sharedProps {
  options: FancySelectOption[];
  value?: Key;
  defaultValue?: Key;
  onChange?: (option?: Key) => any;
  inputRenderer?: (
    props: sharedProps & { selected?: FancySelectOption; ref: LegacyRef<any> }
  ) => ReactNode;
  optionRenderer?: (props: {
    active: boolean;
    disabled: boolean;
    selected: boolean;
    option: FancySelectOption;
  }) => ReactNode;
}
