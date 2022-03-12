import { HTMLProps } from "react";

type Variant = "fill" | "light" | "outline" | "link";

type Area = "sm" | "base" | "lg" | "xl" | "2xl";

export default interface IButton extends HTMLProps<HTMLButtonElement> {
  color?: "primary" | "error";
  variant?: Variant;
  area?: Area;
}
