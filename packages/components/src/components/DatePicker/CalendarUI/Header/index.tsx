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
import Tooltip from '../../../Tooltip';
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
  onNextYearClick,
  onPreviousMonthClick,
  onPreviousYearClick,
  ...props
}) => {
  return (
    <HeaderContainer {...props}>
      <Tooltip content="Go to previous year">
        <ArrowContainer
          onClick={onPreviousYearClick}
          aria-label="previous year"
        >
          <ChevronDoubleLeftIcon />
        </ArrowContainer>
      </Tooltip>
      <Tooltip content="Go to previous month">
        <ArrowContainer
          onClick={onPreviousMonthClick}
          aria-label="previous month"
        >
          <ChevronLeftIcon />
        </ArrowContainer>
      </Tooltip>
      <MonthContainer aria-live="polite">
        <span>{format(month, 'MMM')}</span>
        <span>{format(month, 'Y')}</span>
      </MonthContainer>
      <Tooltip content="Go to next month">
        <ArrowContainer onClick={onNextMonthClick} aria-label="next month">
          <ChevronRightIcon />
        </ArrowContainer>
      </Tooltip>
      <Tooltip content="Go to next year">
        <ArrowContainer onClick={onNextYearClick} aria-label="next year">
          <ChevronDoubleRightIcon />
        </ArrowContainer>
      </Tooltip>
    </HeaderContainer>
  );
};

export default Header;
