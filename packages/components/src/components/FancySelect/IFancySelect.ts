import { HTMLProps, LegacyRef, ReactNode } from 'react';

export interface Option {
  value: string;
  text?: ReactNode;
  disabled?: boolean;
  children?: Option[];
}

export type ProcessedOption = Option & {
  presentation?: boolean;
  index?: number;
};

export interface SharedProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export interface ISelectInput extends HTMLProps<HTMLButtonElement> {
  error?: boolean;
}

export type OptionRenderer = (
  option: Option,
  props: {
    active: boolean;
    disabled: boolean;
    selected: boolean;
    role: string;
    ref: LegacyRef<any>;
    tabIndex: number;
    'aria-selected': boolean;
    'aria-disabled': boolean;
    'data-disabled': boolean;
    onClick: () => any;
    onKeyDown: () => any;
  },
) => ReactNode;

export type OptionGroupRenderer = (
  option: Option,
  props: {
    key: string;
    role: string;
    'aria-hidden': boolean;
  },
) => ReactNode;

export default interface IFancySelect extends SharedProps {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (option?: string) => any;
  inputRenderer?: (props: ISelectInput & { option?: Option }) => ReactNode;
  optionGroupRenderer?: OptionGroupRenderer;
  optionRenderer?: OptionRenderer;
}
