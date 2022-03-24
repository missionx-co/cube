import { LegacyRef, ReactNode } from "react";

export default interface IDropdown {
  className?: string;
  buttonRenderer: (props: { ref: LegacyRef<HTMLElement> }) => ReactNode;
}
