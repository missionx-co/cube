import React, { FC, forwardRef, ForwardRefRenderFunction } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

import IInput from "./IInput";

const StyledInput: StyledComponentType<any> = styled("input", {
  ...tw`w-full px-3.5 py-2.5 border rounded-lg w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed`,
  variants: {
    error: {
      true: {
        ...tw`border-error-300 focus:border-error-300 focus:ring-error-300`,
      },
      false: {
        ...tw`border-gray-300 focus:border-primary-300 focus:ring-primary-300`,
      },
    },
  },
});

const Input: FC<IInput> = (props) => <StyledInput {...props} />;

export default Input;
