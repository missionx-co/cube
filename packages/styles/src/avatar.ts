import get from "lodash/get";
import { twMerge } from "tailwind-merge";

export const userAvatarStyles = {
  base: "relative flex items-center",
  area: {
    sm: "space-x-2.5",
    base: "space-x-3",
    lg: "space-x-3",
    xl: "space-x-4",
  },
};

export const avatarStyles = {
  base: "bg-primary-50 text-primary-600 flex items-center justify-center overflow-hidden rounded-full",
  area: {
    sm: "w-8 h-8",
    base: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  },
};

export const userTextStyles = {
  base: "flex flex-col items-start",
};

export const nameStyles = {
  base: "font-medium text-gray-700",
  area: {
    sm: "text-sm",
    base: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  },
};

export const subTextStyles = {
  base: "font-normal text-gray-500",
  area: {
    sm: "text-xs",
    base: "text-sm",
    lg: "text-base",
    xl: "text-base",
  },
};

export default function getAvatarStyles(
  area: string,
  classNames?: Record<string, any>
) {
  const userAvatarContainerClassName = twMerge(
    userAvatarStyles.base,
    get(userAvatarStyles.area, area as string),
    classNames?.containerClassName
  );

  const avatarClassName = twMerge(
    avatarStyles.base,
    get(avatarStyles.area, area as string),
    classNames?.avatarClassName
  );

  const userInfoContainerClassName = twMerge(
    userTextStyles.base,
    get(userTextStyles, ["area", area as string])
  );

  const nameClassName = twMerge(
    nameStyles.base,
    get(nameStyles, ["area", area as string])
  );

  const subTextClassName = twMerge(
    subTextStyles.base,
    get(subTextStyles, ["area", area as string]),
    classNames?.userSubtextClassName
  );

  return {
    userAvatarContainerClassName,
    avatarClassName,
    userInfoContainerClassName,
    nameClassName,
    subTextClassName,
  };
}
