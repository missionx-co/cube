import { HTMLProps } from "react";

export interface Option {
  id: string;
  value: string;
  text: string;
  disabled?: boolean;
  children?: Omit<Option, "children">[];
}

export default interface ISelect extends HTMLProps<HTMLSelectElement> {
  options: Option[];
  error?: boolean;
}

export const defaultOption = {
  id: "default",
  value: "default",
  text: "default",
};
