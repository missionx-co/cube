import React, { FC, HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ITitle extends HTMLProps<HTMLHeadingElement> {}

export type TitleType = FC<ITitle>;

const Title: TitleType = ({ children, className, ...props }) => (
  <h3 className={twMerge('mr-3 font-medium', className)} {...props}>
    {children}
  </h3>
);

export default Title;
