import { HTMLProps } from "react";

export default interface ITitle extends HTMLProps<HTMLElement> {
  onClose?: () => any;
}
