import { RefObject } from "react";

export default interface IPopover {
  triggerRef: RefObject<HTMLDivElement>;
  isOpen?: boolean;
  onClose: () => any;
}
