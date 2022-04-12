import { Listbox } from '@headlessui/react';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, HTMLProps, forwardRef } from 'react';
import tw from 'twin.macro';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { styled } from '../../stitches.config';
import { sharedProps } from './IFancySelect';

interface IInput extends sharedProps, HTMLProps<HTMLButtonElement> {
  className?: string;
  error?: boolean;
}

export type InputType = ForwardedComponent<IInput, HTMLButtonElement>;

const ListBoxButton: StyledComponentType<any> = styled('button', {
  ...tw`px-3.5 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed flex flex-row items-center justify-between w-full text-gray-900 border rounded-lg`,
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

const Input: InputType = forwardRef(({ children, error, ...props }, ref) => (
  <ListBoxButton ref={ref} error={Boolean(error)} {...props}>
    {children}
  </ListBoxButton>
));

Input.defaultProps = {
  disabled: false,
};

export default Input;
