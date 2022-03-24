import React, { FC, forwardRef } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

import { base, primary, error } from "./styles";
import { StyledComponentType } from "@stitches/core/types/styled-component";
import ForwardedComponent from "../../SharedType/ForwardedComponent";

import IButton from "./IButton";

import Group, { IButtonsGroup } from "./Group";

type IButtonType = ForwardedComponent<IButton, HTMLButtonElement> & {
  Group: FC<IButtonsGroup>;
};

const StyledButton: StyledComponentType<any> = styled("button", {
  ...tw`focus:ring-2 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed font-medium text-white transition-colors duration-300 ease-in-out border rounded-lg`,
  variants: {
    area: {
      sm: {
        ...tw`px-3.5 py-2 text-sm font-medium`,
      },
      base: {
        ...tw`py-2.5 px-4 text-sm font-medium`,
      },
      lg: {
        ...tw`px-4.5 py-2.5 text-md font-medium`,
      },
      xl: {
        ...tw`text-md px-5 py-3 font-medium`,
      },
      "2xl": {
        ...tw`px-7 py-4 text-lg font-medium`,
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

const Button: any = forwardRef<HTMLButtonElement, IButton>(
  ({ color, variant, area, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      color={color}
      area={area}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  )
);

Button.defaultProps = {
  color: "primary",
  variant: "fill",
  area: "base",
};

Button.Group = Group;

const ButtonComponent = Button as IButtonType;

export default ButtonComponent;
