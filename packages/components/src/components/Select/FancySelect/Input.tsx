import React, { FC, HTMLAttributes, forwardRef } from "react";

import { Option } from "../ISelect";

import {
  ValueContainer,
  PlaceholderContainer,
  SelectorIconContainer,
} from "./styles";

export interface IInput extends HTMLAttributes<HTMLElement> {
  open: boolean;
  valueProps: HTMLAttributes<HTMLElement>;
  placeholder?: string;
  focus?: boolean;
  error?: boolean;
  option?: Option;
}

const FInput: FC<IInput> = forwardRef(
  ({ placeholder, open, focus, error, option, valueProps, ...props }, ref) => (
    <ValueContainer {...props} ref={ref} error={error} focus={open}>
      <PlaceholderContainer {...valueProps} selected={Boolean(option)}>
        {option ? option.text : placeholder}
      </PlaceholderContainer>
      <SelectorIconContainer focus={focus} />
    </ValueContainer>
  )
);

export default FInput;
