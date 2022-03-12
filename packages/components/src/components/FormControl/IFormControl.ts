import { HTMLProps, ReactNode } from "react";

export default interface IFormControl extends HTMLProps<HTMLDivElement> {
  id: string;
  fieldLabel?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;

  atoms?: {
    label?: Omit<HTMLProps<HTMLLabelElement>, "children">;
    hint?: Omit<HTMLProps<HTMLSpanElement>, "children">;
    error?: Omit<HTMLProps<HTMLSpanElement>, "children">;
  };
}
