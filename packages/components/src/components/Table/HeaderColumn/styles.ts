import { StyledComponentType } from '@stitches/core/types/styled-component';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';

export const TableHeadColumn: StyledComponentType<any> = styled(
  'th',
  tw`px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200`,
);
