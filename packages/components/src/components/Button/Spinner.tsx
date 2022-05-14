import React, { FC } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';

interface ISpinner {
  className?: string;
}

const Container = styled('svg', tw`animate-spin w-5 h-5 text-white`);
const Circle = styled('circle', tw`opacity-25`);
const Path = styled('path', tw`opacity-75`);

const Spinner: FC<ISpinner> = (props) => (
  <Container
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></Circle>
    <Path
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></Path>
  </Container>
);

export default Spinner;
