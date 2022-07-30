import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const styles = {
  base: "focus:ring-2 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed font-medium text-white transition-colors duration-300 ease-in-out border rounded-lg",
  area: {
    sm: "px-3.5 py-2 text-sm font-medium",
    base: "py-2.5 px-4 text-sm font-medium",
    lg: "px-4.5 py-2.5 text-base font-medium",
    xl: "px-5 py-3 text-base font-medium",
    "2xl": "px-7 py-4 text-lg font-medium",
  },
  color: {
    primary: "focus:ring-primary-300",
    error: "focus:ring-error-300",
    success: "focus:ring-success-300",
  },
  variant: {
    outline: "bg-white border font-normal",
    link: "p-0 border-0",
  },
  combined: {
    "primary-fill":
      "bg-primary-600 border-primary-600 hover:bg-primary-700 hover:border-primary-700 disabled:bg-primary-200 disabled:border-primary-200",
    "primary-light":
      "bg-primary-50 border-primary-50 text-primary-700 hover:border-primary-100 hover:bg-primary-100 disabled:bg-primary-25 disabled:text-primary-300 disabled:border-primary-25",
    "primary-outline":
      "border-primary-300 text-primary-700 hover:bg-primary-50 disabled:bg-white disabled:border-primary-200 disabled:text-primary-300",
    "primary-link":
      "text-primary-700 hover:text-primary-800 disabled:text-gray-300",
    "error-fill":
      "bg-error-600 border-error-600 hover:bg-error-700 hover:border-error-700 disabled:bg-error-200 disabled:border-error-200",
    "error-light":
      "bg-error-50 border-error-50 text-error-700 hover:bg-error-100 hover:border-error-100 disabled:bg-error-25 disabled:border-error-25 disabled:text-error-300",
    "error-outline":
      "border-error-300 text-error-700 hover:bg-error-50 disabled:bg-white disabled:border-error-200 disabled:text-error-300",
    "error-link": "text-error-700 hover:text-error-800 disabled:text-error-300",
    "success-fill":
      "bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600 disabled:bg-success-200 disabled:border-success-200",
    "success-light":
      "bg-success-50 border-success-50 text-success-600 hover:bg-success-100 hover:border-success-100 disabled:bg-success-25 disabled:border-success-25 disabled:text-success-300",
    "success-outline":
      "border-success-300 text-success-600 hover:bg-success-50 disabled:bg-white disabled:border-success-200 disabled:text-success-300",
    "success-link":
      "text-success-600 hover:text-success-800 disabled:text-success-300",
  },
  loading: "opacity-90 cursor-not-allowed",
};

export default function getButtonStyles(
  area: string,
  variant: string,
  color: string,
  loading: boolean,
  className?: string
) {
  return twMerge(
    styles.base,
    get(styles, ["area", area]),
    get(styles, ["variant", variant]),
    get(styles, ["color", color]),
    get(styles, ["combined", `${color}-${variant}`]),
    loading && styles.loading,
    className
  );
}
