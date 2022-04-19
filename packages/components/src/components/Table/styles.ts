import { StyledComponentType } from '@stitches/core/types/styled-component';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';

export const Table: StyledComponentType<any> = styled(
  'table',
  tw`whitespace-nowrap relative w-full bg-white border-collapse table-auto`,
);

export const TableWrapper: StyledComponentType<any> = styled(
  'div',
  tw`relative overflow-auto bg-white rounded-lg shadow-md`,
);
