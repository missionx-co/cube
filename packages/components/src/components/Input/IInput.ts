import { HTMLProps } from "react";

export default interface IInput extends HTMLProps<HTMLInputElement> {
  error?: boolean;
}
