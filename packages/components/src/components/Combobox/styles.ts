import tw from 'twin.macro';

import { styled } from '../../stitches.config';

export const InputContainer = styled('div', tw`relative w-full`);

export const PanelContainer = styled(
  'div',
  tw`overflow-y-auto bg-white border border-gray-200 rounded-lg`,
);

export const OptionLI = styled('li', {
  ...tw`flex flex-row justify-between px-4 py-2`,
  variants: {
    active: {
      true: {
        ...tw`bg-gray-100`,
      },
    },
    disabled: {
      true: {
        ...tw`text-gray-500 cursor-not-allowed`,
      },
      false: {
        ...tw`hover:bg-gray-50 text-gray-900 cursor-pointer`,
      },
    },
  },
});
