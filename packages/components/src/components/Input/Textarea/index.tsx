import React, { FC } from "react";
import tw from "twin.macro";
import { styled } from "../../../stitches.config";

import { StyledComponentProps } from "@stitches/core/types/styled-component";

const StyledTextarea: StyledComponentProps<any> = styled("textarea", {
  ...tw`w-full px-3.5 py-2.5 border rounded-lg w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed`,
  variants: {
    error: {
      true: {
        ...tw`border-error-300 focus:border-error-300 focus:ring-error-300`,
      },
      false: {
        ...tw`focus:border-primary-300 focus:ring-primary-300 border-gray-300`,
      },
    },
  },
});

import ITextarea from "./ITextarea";

const Textarea: FC<ITextarea> = (props) => <StyledTextarea {...props} />;

export default Textarea;
