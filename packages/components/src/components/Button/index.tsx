import React, { FC } from "react";
import clsx from "classnames";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  ...tw`px-3 py-2 font-medium text-white rounded bg-error-500`,
});

interface IButton {
  className?: string;
}

const Button: FC<IButton> = ({ className }) => (
  <StyledButton className={className}>Button</StyledButton>
);

export default Button;
