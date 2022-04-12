import { Key, LegacyRef, ReactNode } from 'react';

export interface Option {
  id: string;
  value: string;
  text?: ReactNode;
  disabled?: boolean;
  children: Option[];
}

export interface sharedProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export default interface IFancySelect extends sharedProps {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (option?: string) => any;
  inputRenderer?: (
    props: sharedProps & { selected?: Option; ref: LegacyRef<any> },
  ) => ReactNode;
  optionRenderer?: (props: {
    active: boolean;
    disabled: boolean;
    selected: boolean;
    option: Option;
  }) => ReactNode;
}
