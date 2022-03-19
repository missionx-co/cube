import { HTMLProps, HTMLAttributes, RefObject, ReactElement } from "react";

export type GroupTitleRenderer = (params: {
  option: Option;
  props: HTMLAttributes<HTMLElement>;
}) => ReactElement<any, any> | null;

export type OptionRenderer = (params: {
  option: Option;
  selected: boolean;
  focus: boolean;
  disabled: boolean;
  props: HTMLAttributes<HTMLElement>;
}) => ReactElement<any, any> | null;

export type FancySelectButtonRenderer = (parms: {
  ref: RefObject<HTMLButtonElement>;
  props: HTMLAttributes<HTMLElement>;
  valueProps: HTMLAttributes<HTMLElement>;
  option?: Option;
  open: boolean;
  error?: boolean;
  focus?: boolean;
}) => ReactElement<any, any> | null;

export interface Renderers {
  groupTitleRenderer?: GroupTitleRenderer;
  optionRenderer?: OptionRenderer;
}

export interface HasOptions {
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  disabled?: boolean;
  children?: Option[];
}

export default interface ISelect
  extends HasOptions,
    HTMLProps<HTMLSelectElement> {
  error?: boolean;
}

export const defaultOption = {
  id: "default",
  value: "default",
  text: "default",
};
