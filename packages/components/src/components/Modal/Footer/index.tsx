import React from 'react';
import { twMerge } from 'tailwind-merge';

import IFooter from './IFooter';

export type FooterType = React.FC<IFooter>;

const Footer: FooterType = ({ children, className, ...props }) => {
  return (
    <footer className={twMerge('p-4', className)} {...props}>
      {children}
    </footer>
  );
};

export default Footer;
