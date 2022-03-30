import { StyledComponentType } from '@stitches/core/types/styled-component';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';

export const AlertContainer: StyledComponentType<any> = styled('div', {
  ...tw`flex flex-row w-full px-5 py-3 rounded-lg`,
  variants: {
    color: {
      primary: {},
    },
    variant: {
      light: {},
      filled: {},
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'light',
      css: tw`bg-primary-100 text-primary-600`,
    },
    {
      color: 'primary',
      variant: 'filled',
      css: tw`bg-primary-500 text-white`,
    },
    {
      color: 'success',
      variant: 'light',
      css: tw`bg-success-100 text-success-600`,
    },
    {
      color: 'success',
      variant: 'filled',
      css: tw`bg-success-400 text-white`,
    },
    {
      color: 'error',
      variant: 'light',
      css: tw`bg-error-100 text-error-600`,
    },
    {
      color: 'error',
      variant: 'filled',
      css: tw`bg-error-400 text-white`,
    },
    {
      color: 'warning',
      variant: 'light',
      css: tw`bg-warning-100 text-warning-600`,
    },
    {
      color: 'warning',
      variant: 'filled',
      css: tw`bg-warning-500 text-white`,
    },
  ],
});
