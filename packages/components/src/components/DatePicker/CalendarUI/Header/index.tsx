import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import Tooltip from '../../../Tooltip';
import { useDatePickerContext } from '../../useDataPicker';
import IHeader from './IHeader';

const Header: FC<IHeader> = ({ className, month, ...props }) => {
  const { goToNextMonth, goToNextYear, goToPreviousMonth, goToPreviousYear } =
    useDatePickerContext();
  return (
    <header
      className={twMerge(
        'flex items-center w-full p-3 mb-1 space-x-3 text-center border border-gray-200 rounded-lg',
        className,
      )}
      {...props}
    >
      <Tooltip content="Go to previous year">
        <button
          className="hover:text-gray-600 flex-shrink-0 block w-4 h-4 text-gray-400"
          onClick={goToPreviousYear}
          aria-label="previous year"
        >
          <ChevronDoubleLeftIcon />
        </button>
      </Tooltip>
      <Tooltip content="Go to previous month">
        <button
          className="hover:text-gray-600 flex-shrink-0 block w-4 h-4 text-gray-400"
          onClick={goToPreviousMonth}
          aria-label="previous month"
        >
          <ChevronLeftIcon />
        </button>
      </Tooltip>
      <h4 className="w-full space-x-8" aria-live="polite">
        <span>{format(month, 'MMM')}</span>
        <span>{format(month, 'Y')}</span>
      </h4>
      <Tooltip content="Go to next month">
        <button
          className="hover:text-gray-600 flex-shrink-0 block w-4 h-4 text-gray-400"
          onClick={goToNextMonth}
          aria-label="next month"
        >
          <ChevronRightIcon />
        </button>
      </Tooltip>
      <Tooltip content="Go to next year">
        <button
          className="hover:text-gray-600 flex-shrink-0 block w-4 h-4 text-gray-400"
          onClick={goToNextYear}
          aria-label="next year"
        >
          <ChevronDoubleRightIcon />
        </button>
      </Tooltip>
    </header>
  );
};

export default Header;
