import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const groupStyles = {
  base: "flex flex-col items-start space-y-3",
  orientation: {
    horizontal: "md:flex-row md:space-y-0 md:space-x-3 md:items-center",
  },
};

export function getRadioGroupStyles({ orientation, className }: any) {
  return twMerge(
    groupStyles.base,
    get(groupStyles, ["orientation", orientation]),
    className
  );
}
