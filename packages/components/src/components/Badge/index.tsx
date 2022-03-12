import React, { FC } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

import IBadge from "./IBadge";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const StyledBadge: StyledComponentType<any> = styled("span", {
  ...tw`font-medium rounded-2xl`,
  variants: {
    area: {
      sm: {
        ...tw`text-xs px-2 py-0.5`,
      },
      base: {
        ...tw`px-2.5 py-0.5 text-sm`,
      },
      lg: {
        ...tw`px-3 py-1 text-sm`,
      },
    },
    color: {
      gray: {
        ...tw`text-gray-700 bg-gray-100`,
      },
      primary: {
        ...tw`text-primary-700 bg-primary-50`,
      },
      error: {
        ...tw`text-error-700 bg-error-50`,
      },
      warning: {
        ...tw`text-warning-700 bg-warning-50`,
      },
      success: {
        ...tw`text-success-700 bg-success-50`,
      },
      "blue-gray": {
        ...tw`text-blue-gray-700 bg-blue-gray-50`,
      },
      "blue-light": {
        ...tw`text-blue-light-700 bg-blue-light-50`,
      },
      blue: {
        ...tw`text-blue-700 bg-blue-50`,
      },
      indigo: {
        ...tw`text-indigo-700 bg-indigo-50`,
      },
      purple: {
        ...tw`text-purple-700 bg-purple-50`,
      },
      pink: {
        ...tw`text-pink-700 bg-pink-50`,
      },
      rose: {
        ...tw`text-rose-700 bg-rose-50`,
      },
      orange: {
        ...tw`text-orange-700 bg-orange-50`,
      },
    },
  },
});

const Badge: FC<IBadge> = ({ children, area, color, ...props }) => (
  <StyledBadge area={area} color={color} {...props}>
    {children}
  </StyledBadge>
);

Badge.defaultProps = {
  color: "gray",
  area: "base",
};

export default Badge;
