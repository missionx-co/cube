import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, HTMLProps, forwardRef } from 'react';
import tw from 'twin.macro';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { styled } from '../../stitches.config';

interface IOption extends HTMLProps<HTMLLIElement> {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export type OptionType = ForwardedComponent<IOption, HTMLLIElement>;

const OptionLI: StyledComponentType<any> = styled('li', {
  ...tw`flex flex-row justify-between px-4 py-2`,
  variants: {
    active: {
      true: {
        ...tw`bg-gray-100`,
      },
    },
    selected: {
      true: {
        ...tw`bg-gray-100`,
      },
    },
    disabled: {
      true: {
        ...tw`text-gray-500 cursor-not-allowed`,
      },
      false: {
        ...tw`hover:bg-gray-100 text-gray-900 cursor-pointer`,
      },
    },
  },
});

const Option: OptionType = forwardRef(
  ({ active, selected, disabled, children, ...props }, ref) => (
    <OptionLI
      ref={ref}
      active={active}
      selected={selected}
      disabled={disabled}
      {...props}
    >
      {children}
    </OptionLI>
  ),
);

export default Option;
