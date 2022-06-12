import { StyledComponentProps } from '@stitches/core/types/styled-component';
import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
import ITextarea from './ITextarea';

const StyledTextarea: StyledComponentProps<any> = styled('textarea', {
  ...tw`px-3.5 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed w-full text-gray-900 placeholder-gray-500 border rounded-lg`,
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

const Textarea: FC<ITextarea> = ({ error, ...props }) => (
  <StyledTextarea error={error} {...props} />
);
Textarea.defaultProps = {
  error: false,
};

export default Textarea;
