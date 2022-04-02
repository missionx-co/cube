import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import { format } from 'date-fns';
import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../../../stitches.config';
import IHeader from './IHeader';

const HeaderContainer: StyledComponentType<any> = styled(
  'header',
  tw`flex items-center w-full p-3 mb-1 space-x-3 text-center border border-gray-200 rounded-lg`,
);
const ArrowContainer = styled(
  'button',
  tw`hover:text-gray-600 flex-shrink-0 block w-4 h-4 text-gray-400`,
);

const MonthContainer = styled('h4', tw`w-full space-x-8`);

const Header: FC<IHeader> = ({
  className,
  month,
  onNextMonthClick,
  onPreviosMonthClick,
  ...props
}) => {
  return (
    <HeaderContainer {...props}>
      <ArrowContainer>
        <ChevronDoubleLeftIcon />
      </ArrowContainer>
      <ArrowContainer>
        <ChevronLeftIcon />
      </ArrowContainer>
      <MonthContainer>
        <span>{format(month, 'MMMM')}</span>
        <span>{format(month, 'Y')}</span>
      </MonthContainer>
      <ArrowContainer>
        <ChevronRightIcon />
      </ArrowContainer>
      <ArrowContainer>
        <ChevronDoubleRightIcon />
      </ArrowContainer>
    </HeaderContainer>
  );
};

export default Header;
