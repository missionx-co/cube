import { FloatingOverlay } from '@floating-ui/react-dom-interactions';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Transition from '../../Transition';
import { useModalContext } from '../Context';
import IOverlay from './IOverlay';

export type OverlayType = React.FC<IOverlay>;

const Overlay: OverlayType = ({ className, lockScroll, transition }) => {
  const { open } = useModalContext();

  const overlayClassName = twMerge(
    'bg-opacity-30 fixed inset-0 z-40 flex w-full h-full transition duration-150 ease-in-out bg-black',
    className,
  );

  return (
    <Transition
      show={open}
      as={FloatingOverlay}
      lockScroll={lockScroll}
      className={overlayClassName}
      {...transition}
    />
  );
};

export default Overlay;
