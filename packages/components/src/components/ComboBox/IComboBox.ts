import { Key } from "react";
import IFancySelect, { FancySelectOption } from "../FancySelect/IFancySelect";

export default interface IComboBox extends Omit<IFancySelect, "inputRenderer"> {
  displayValue?: (selected?: FancySelectOption) => string;
}
