import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { forwardRef } from 'react';
import tw from 'twin.macro';

import ForwardedComponent from '../../../SharedType/ForwardedComponent';
import { styled } from '../../../stitches.config';
import IPaginationPill from './IPaginationPill';

const PaginationPillContainer: StyledComponentType<any> = styled('button', {
  ...tw`hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-100 flex items-center justify-center w-8 h-8 p-1 bg-white border border-gray-200 rounded-md cursor-pointer`,
  variants: {
    active: {
      true: tw`bg-primary-600 hover:bg-primary-600 text-white cursor-not-allowed`,
    },
  },
});

const PaginationPill: ForwardedComponent<IPaginationPill, HTMLButtonElement> =
  forwardRef(
    ({ page, children, className, onClick, active, ...props }, ref) => {
      const handleClick = (e: any) => {
        onClick && onClick(page);
      };

      return (
        <PaginationPillContainer
          active={active}
          onClick={handleClick}
          aria-current={active}
          {...props}
          ref={ref}
          className={className}
        >
          {children}
        </PaginationPillContainer>
      );
    },
  );

PaginationPill.defaultProps = {
  active: false,
};

export default PaginationPill;
