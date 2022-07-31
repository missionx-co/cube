import { twMerge } from "tailwind-merge";

export const inputStyles = {
  base: "px-3.5 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed flex flex-row items-center justify-between w-full text-gray-900 border rounded-lg focus:border-primary-300 focus:ring-primary-300 border-gray-300",
  error: "border-error-300 focus:border-error-300 focus:ring-error-300",
};

export const optionStyles = {
  base: "flex flex-row justify-between px-4 py-2 hover:bg-gray-50 text-gray-900 cursor-pointer",
  active: "bg-gray-100",
  selected: "bg-primary-100",
  disabled: "text-gray-500 cursor-not-allowed",
};

export const panelContainer = {
  base: "overflow-y-auto bg-white border border-gray-200 rounded-lg",
};

export function getInputStyles({ className, error }: any) {
  return twMerge(inputStyles.base, error && inputStyles.error, className);
}

export function getOptionStyles({
  active,
  selected,
  disabled,
  className,
}: any) {
  return twMerge(
    optionStyles.base,
    active && optionStyles.active,
    selected && optionStyles.selected,
    disabled && optionStyles.disabled,
    className
  );
}
