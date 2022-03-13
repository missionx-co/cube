import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";

export default interface IListBox extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

export interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

export interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}
