import React, { FC, HTMLProps } from "react";
import tw from "twin.macro";
import { Color } from "@untitled-ui/foundation";
import { styled } from "../../stitches.config";

import { base, primary, error } from "./styles";

const StyledButton = styled("button", {
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

type Variant = "fill" | "light" | "outline" | "link";

type Area = "sm" | "base" | "lg" | "xl" | "2xl";

interface IButton extends HTMLProps<HTMLButtonElement> {
  color?: "primary" | "error";
  variant?: Variant;
  area?: Area;
}

const Button: FC<IButton> = ({ color, variant, area, children, ...props }) => (
  // @ts-ignore
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
