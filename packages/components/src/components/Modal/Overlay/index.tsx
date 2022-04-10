import { FloatingOverlay } from '@floating-ui/react-dom-interactions';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
import Transition from '../../Transition';
import { useModalContext } from '../Context';
import IOverlay from './IOverlay';

const StyledOverlay: StyledComponentType<any> = styled(FloatingOverlay, {
  ...tw`bg-opacity-30 fixed inset-0 z-40 flex w-full h-full transition duration-150 ease-in-out bg-black`,
});

export type OverlayType = React.FC<IOverlay>;

const Overlay: OverlayType = ({ className, lockScroll, transition }) => {
  const { open } = useModalContext();

  return (
    <Transition
      show={open}
      as={StyledOverlay}
      lockScroll={lockScroll}
      className={className}
      {...transition}
    />
  );
};

export default Overlay;
