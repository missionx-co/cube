import { CalendarIcon as HeroCalendarIcon } from '@heroicons/react/outline';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import Input from '../Input';

export const DatePickerContainer = styled('div', tw`relative flex w-full`);

export const DatePickerInput = styled(Input, tw`border-r-0 rounded-r-none`);

export const IconContainer = styled('span', {
  ...tw` px-3.5 py-2.5 bg-white border border-l-0 border-gray-300 rounded-r-lg cursor-pointer`,
  variants: {
    disabled: {
      true: tw`disabled:bg-gray-50 disabled:cursor-not-allowed`,
    },
    error: {
      true: tw`border-error-300 focus:border-error-300 focus:ring-error-300`,
    },
    focus: {
      true: tw`ring-primary-300 ring-2`,
    },
  },
});

export const CalendarIcon = styled(
  HeroCalendarIcon,
  tw`block w-6 h-6 text-gray-400`,
);

export const PopoverContainer = styled(
  'div',
  tw`absolute z-50 p-2 bg-white border border-gray-300 rounded-lg`,
);

export const CalendarContainer = styled('div', tw`flex space-x-8`);

export const FooterContainer = styled(
  'footer',
  tw`flex items-center justify-end pt-2 space-x-3 border-t border-gray-200 border-dotted`,
);
