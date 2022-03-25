import React, { useState, FC, Children, Fragment } from "react";
import tw from "twin.macro";
import Tippy from "@tippyjs/react";

import { styled } from "../../stitches.config";

import ITooltip from "./ITooltip";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const TooltipContainer: StyledComponentType<any> = styled(
  Tippy,
  tw`px-2.5 w-full py-1 text-white transform bg-gray-900 bg-opacity-75 rounded`
);

const Tooltip: FC<ITooltip> = ({ children, ...props }) => {
  const totalChildrenCount = Children.count(children);
  if (totalChildrenCount > 1) {
    throw new Error("Tooltip component must only have one child.");
  }

  return <TooltipContainer {...props}>{children}</TooltipContainer>;
};

export default Tooltip;
