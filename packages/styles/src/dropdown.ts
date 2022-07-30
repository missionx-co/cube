import { twMerge } from "tailwind-merge";

export const containerStyles = {
  base: "max-h-60 focus:outline-none absolute flex flex-col w-56 overflow-auto bg-white border border-gray-300 rounded-lg shadow-md outline-none",
};

export const itemStyles = {
  base: "disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 w-full px-4 py-2 text-left text-gray-900",
  active: "bg-gray-100",
};

export function getItemStyles(active: boolean, className?: string) {
  return twMerge(itemStyles.base, active && itemStyles.active, className);
}
