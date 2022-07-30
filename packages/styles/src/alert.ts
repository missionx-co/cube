import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const styles = {
  base: "flex flex-row w-full px-5 py-3 rounded-lg",
  variant: {
    filled: "text-white",
  },
  combined: {
    "primary-light": "bg-primary-100 text-primary-600",
    "primary-filled": "bg-primary-500",
    "success-light": "bg-success-100 text-success-600",
    "success-filled": "bg-success-400",
    "error-light": "bg-error-100 text-error-600",
    "error-filled": "bg-error-400",
    "warning-light": "bg-warning-100 text-warning-600",
    "warning-filled": "bg-warning-500",
  },
};

export default function getAlertStyles(
  { variant, color }: any,
  className?: string
) {
  return twMerge(
    styles.base,
    get(styles, ["variant", variant]),
    get(styles, ["color", color]),
    get(styles, ["combined", `${color}-${variant}`]),
    className
  );
}

export function getAlertTitleStyles(className?: string) {
  return twMerge("mr-3 font-medium", className);
}
