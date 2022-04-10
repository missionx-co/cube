import {
  useDismiss,
  useFloating,
  useFocusTrap,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
import Transition from '../../Transition';
import { useModalContext } from '../Context';
import IContent from './IContent';

const ContentContainer: StyledComponentType<any> = styled('div', {
  ...tw`left-1/2 top-1/2 fixed z-50 block w-full max-w-2xl transition duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg outline-none`,
});

export type ContentType = React.FC<IContent>;

const Content: ContentType = ({ children, transition, ...props }) => {
  const { open, onClose } = useModalContext();

  const { floating, context } = useFloating({
    open,
    onOpenChange: onClose,
  });

  const { getFloatingProps } = useInteractions([
    useFocusTrap(context),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <Transition
      show={open}
      as={ContentContainer}
      {...getFloatingProps({
        ref: floating,
      })}
      {...transition}
      {...props}
    >
      {children}
    </Transition>
  );
};

export default Content;
