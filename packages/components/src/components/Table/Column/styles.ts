import { StyledComponentType } from '@stitches/core/types/styled-component';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';

export const TableBodyCell: StyledComponentType<any> = styled(
  'td',
  tw`px-6 py-3 text-sm border-t border-gray-200 border-dashed`,
);
