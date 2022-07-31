import { twMerge } from "tailwind-merge";

export const styles = {
  base: "px-3.5 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed w-full text-gray-900 placeholder-gray-500 border rounded-lg focus:border-primary-300 focus:ring-primary-300 border-gray-300",
  error: "border-error-300 focus:border-error-300 focus:ring-error-300",
};

export default function getInputStyles(error?: boolean, className?: string) {
  return twMerge(styles.base, error && styles.error, className);
}
