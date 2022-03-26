import { HTMLProps, ReactNode } from "react";
import { AriaCheckboxProps } from "@react-types/checkbox";

export default interface ICheckbox
  extends Omit<
    AriaCheckboxProps,
    | "isDisabled"
    | "isRequired"
    | "defaultSelected"
    | "selected"
    | "isReadonly"
    | "validationState"
  > {
  area?: "sm" | "base";
  variant?: "outline" | "filled";
  containerClassName?: string;
  className?: string;
  icon?: () => ReactNode;
  disabled?: boolean;
  required?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  readonly?: boolean;
}
