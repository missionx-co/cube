import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, HTMLProps } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';

interface ITitle extends HTMLProps<HTMLElement> {}

const TitleContainer: StyledComponentType<any> = styled(
  'h3',
  tw`mr-3 font-medium`,
);

export type TitleType = FC<ITitle>;

const Title: TitleType = ({ children, ...props }) => (
  <TitleContainer {...props}>{children}</TitleContainer>
);

export default Title;
