import { Key } from "react";
import type { AriaSelectProps } from "@react-types/select";
import { Option, Renderers, FancySelectButtonRenderer } from "../ISelect";

export default interface IFancySelect
  extends Renderers,
    Omit<
      AriaSelectProps<any>,
      | "label"
      | "description"
      | "errorMessage"
      | "validationState"
      | "isRequired"
      | "shouldFlip"
      | "selectedKey"
      | "onSelectionChange"
      | "isDisabled"
      | "children"
    > {
  error?: boolean;
  disabled?: boolean;
  value?: Key;
  onChange?: (option: Option) => any;
  options: Option[];
  fancySelectButtonRenderer?: FancySelectButtonRenderer;
}
