import { StyledComponentProps } from "@stitches/core/types/styled-component";
import React, { FC, useMemo } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";

import ISelect, { defaultOption, Option } from "./ISelect";

const StyledSelect: StyledComponentProps<any> = styled("select", {
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

const mapThroughOptions = (options: Option[]) => {
  return options.map((option) => {
    if (!option.children) {
      return (
        <option
          key={option.id}
          value={option.value}
          disabled={Boolean(option.disabled)}
        >
          {option.text}
        </option>
      );
    }

    return (
      <optgroup
        key={option.id}
        label={option.text}
        disabled={Boolean(option.disabled)}
      >
        {mapThroughOptions(option.children)}
      </optgroup>
    );
  });
};

const Select: FC<ISelect> = ({ options, ...props }) => {
  return <StyledSelect {...props}>{mapThroughOptions(options)}</StyledSelect>;
};

export default Select;
