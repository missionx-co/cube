import { HTMLProps } from "react";
import { Color } from "@untitled-ui/foundation";

export default interface IBadge extends HTMLProps<HTMLSpanElement> {
  color?: Color;
  area?: "sm" | "base" | "lg";
}
