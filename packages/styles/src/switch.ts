import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const container = {
  base: "flex items-center",
};

export const switchStyles = {
  base: "block rounded-xl relative p-0.5 transition-colors duration-300 ease-in-out shadow-inner bg-gray-100 hover:bg-gray-200 border border-gray-200 cursor-pointer",
  area: {
    sm: "w-9 h-5",
    base: "w-11 h-6",
  },
  selected: "bg-primary-600 hover:bg-primary-600",
  focus: "ring-2 ring-offset-1 ring-primary-200",
  disabled: "bg-gray-50 cursor-not-allowed",
};

export const handleStyles = {
  base: "block rounded-full absolute shadow-md bg-white transition duration-300 ease-in-out transform translate-x-0 left-0.5 top-px",
  area: {
    base: "h-5 w-5",
    sm: "w-4 h-4",
  },
  selected: "translate-x-full left-0",
};

export function getSwitchStyles({
  area,
  selected,
  focus,
  disabled,
  className,
}: any) {
  return twMerge(
    switchStyles.base,
    get(switchStyles, ["area", area]),
    selected && switchStyles.selected,
    focus && switchStyles.focus,
    disabled && switchStyles.disabled,
    className
  );
}

export function getHandleSwitch({ area, selected, className }: any) {
  return twMerge(
    handleStyles.base,
    get(handleStyles, ["area", area]),
    selected && handleStyles.selected,
    className
  );
}
