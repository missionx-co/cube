import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const container = {
  base: "flex items-center",
};

export const label = {
  base: "ml-2 text-sm font-medium text-gray-700",
};

export const checkboxStyles = {
  base: "flex items-center justify-center border-2 rounded hover:border-primary-600 hover:bg-primary-50 bg-white border-gray-300 cursor-pointer",
  area: {
    sm: "w-5 h-5",
    base: "w-6 h-6",
  },
  focus: "ring-2 ring-offset-1 ring-primary-300",
  disabled: "bg-gray-100 border-gray-200 cursor-not-allowed",
  selected: "border-primary-600 bg-primary-50 text-primary-600",
  combined: {
    "filled-selected": "bg-primary-600 hover:bg-primary-600 text-white",
  },
};

export default function getCheckboxStyles({
  variant,
  area,
  focus,
  disabled,
  selected,
  className,
}: any) {
  return twMerge(
    checkboxStyles.base,
    get(checkboxStyles, ["variant", variant]),
    get(checkboxStyles, ["area", area]),
    focus && checkboxStyles.focus,
    selected && checkboxStyles.selected,
    disabled && checkboxStyles.disabled,
    selected && get(checkboxStyles, ["combined", `${variant}-selected`]),
    className
  );
}
