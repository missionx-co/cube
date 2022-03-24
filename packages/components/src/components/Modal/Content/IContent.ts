import { HTMLProps } from "react";
import { ITransition } from "../IModal";

export default interface IContent extends HTMLProps<HTMLDivElement> {
  transition?: ITransition;
}
