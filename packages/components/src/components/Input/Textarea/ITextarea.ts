import { HTMLProps } from "react";

export default interface ITextarea extends HTMLProps<HTMLTextAreaElement> {
  error?: boolean;
}
