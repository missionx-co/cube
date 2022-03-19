import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { Renderers, HasOptions, Option } from "../ISelect";

export default interface IListBox
  extends Renderers,
    HasOptions,
    AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

export interface SectionProps extends Renderers {
  section: Node<unknown>;
  state: ListState<unknown>;
  option: Option;
}

export interface OptionProps extends Pick<Renderers, "optionRenderer"> {
  item: Node<unknown>;
  state: ListState<unknown>;
  option: Option;
}
