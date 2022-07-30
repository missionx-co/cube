import { getAlertTitleStyles } from '@cube-ui/styles/dist/alert';
import React, { FC, HTMLProps } from 'react';

interface ITitle extends HTMLProps<HTMLHeadingElement> {}

export type TitleType = FC<ITitle>;

const Title: TitleType = ({ children, className, ...props }) => (
  <h3 className={getAlertTitleStyles(className)} {...props}>
    {children}
  </h3>
);

export default Title;
