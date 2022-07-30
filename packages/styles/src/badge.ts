import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const styles = {
  base: "font-medium rounded-2xl",
  area: {
    sm: "text-xs px-2 py-0.5",
    base: "px-2.5 py-0.5 text-sm",
    lg: "px-3 py-1 text-sm",
  },
  color: {
    gray: "text-gray-700 bg-gray-100",
    primary: "text-primary-700 bg-primary-50",
    error: "text-error-700 bg-error-50",
    warning: "text-warning-700 bg-warning-50",
    success: "text-success-700 bg-success-50",
    "blue-gray": "text-blue-gray-700 bg-blue-gray-50",
    "blue-light": "text-blue-light-700 bg-blue-light-50",
    blue: "text-blue-700 bg-blue-50",
    indigo: "text-indigo-700 bg-indigo-50",
    purple: "text-purple-700 bg-purple-50",
    pink: "text-pink-700 bg-pink-50",
    rose: "text-rose-700 bg-rose-50",
    orange: "text-orange-700 bg-orange-50",
  },
};

export default function getBadgeStyles(
  area: string,
  color: string,
  className?: string
) {
  return twMerge(
    styles.base,
    get(styles, ["area", area]),
    get(styles, ["color", color]),
    className
  );
}
