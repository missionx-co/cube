import { HTMLProps, ReactNode } from 'react';

export interface IOption extends HTMLProps<HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
}

export interface Option {
  value: string;
  text?: string;
  disabled?: boolean;
}

export default interface ICombobox {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string | null) => any;
  fetchingOptionMessage?: string;
  options: (query: string) => Promise<Option[] | false>;
  displayValue?: (item: Option) => string;
  optionRenderer?: (item: Option, props: IOption) => ReactNode;
  defaultValue?: Option;
  panelClassName?: string;
}
