import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import ForwardedComponent from '../../../SharedType/ForwardedComponent';
import IPaginationPill from './IPaginationPill';

const styles = {
  base: 'hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-100 flex items-center justify-center w-8 h-8 p-1 bg-white border border-gray-200 rounded-md cursor-pointer',
  active: 'bg-primary-600 hover:bg-primary-600 text-white cursor-not-allowed',
};

const PaginationPill: ForwardedComponent<IPaginationPill, HTMLButtonElement> =
  forwardRef(
    ({ page, children, className, onClick, active, type, ...props }, ref) => {
      const handleClick = (e: any) => {
        onClick && onClick(page);
      };

      const pillClassName = twMerge(
        styles.base,
        active && styles.active,
        className,
      );

      return (
        <button
          onClick={handleClick}
          aria-current={active}
          type={type as any}
          {...props}
          ref={ref}
          className={pillClassName}
        >
          {children}
        </button>
      );
    },
  );

PaginationPill.defaultProps = {
  active: false,
};

export default PaginationPill;
