import getInputStyles from '@cube-ui/styles/dist/input';
import React, { FC, forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import IInput from './IInput';
import Textarea from './Textarea';
import ITextarea from './Textarea/ITextarea';

export type IInputType = ForwardedComponent<IInput, HTMLInputElement> & {
  Textarea: FC<ITextarea>;
};

const Input: any = forwardRef<HTMLInputElement, IInput>(
  ({ error, className, ...props }, ref) => (
    <input ref={ref} className={getInputStyles(error, className)} {...props} />
  ),
);
Input.Textarea = Textarea;

const InputComponent = Input as IInputType;

export default InputComponent;
