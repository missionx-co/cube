import React, { FC } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

import { base, primary, error } from "./styles";

import IButton from "./IButton";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const StyledButton: StyledComponentType<any> = styled("button", {
  ...tw`font-medium text-white transition-colors duration-300 ease-in-out rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed`,
  variants: {
    area: {
      sm: {
        ...tw`px-3.5 py-2 text-sm font-medium`,
      },
      base: {
        ...tw`px-4 py-2.5 text-sm font-medium`,
      },
      lg: {
        ...tw`px-4.5 py-2.5 text-md font-medium`,
      },
      xl: {
        ...tw`px-5 py-3 font-medium text-md`,
      },
      "2xl": {
        ...tw`py-4 text-lg font-medium px-7`,
      },
    },
    color: {
      ...base,
    },
    variant: {
      fill: {},
      light: {},
      outline: {},
      link: {},
    },
  },
  compoundVariants: [...primary, ...error],
});

const Button: FC<IButton> = ({ color, variant, area, children, ...props }) => (
  <StyledButton color={color} area={area} variant={variant} {...props}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  color: "primary",
  variant: "fill",
  area: "base",
};

export default Button;
