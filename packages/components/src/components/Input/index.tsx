import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, forwardRef } from 'react';
import tw from 'twin.macro';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { styled } from '../../stitches.config';
import IInput from './IInput';
import Textarea from './Textarea';
import ITextarea from './Textarea/ITextarea';

export type IInputType = ForwardedComponent<IInput, HTMLInputElement> & {
  Textarea: FC<ITextarea>;
};

const StyledInput: StyledComponentType<any> = styled('input', {
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

const Input: any = forwardRef((props, ref) => (
  <StyledInput ref={ref} {...props} />
));
Input.Textarea = Textarea;

const InputComponent = Input as IInputType;

export default InputComponent;
