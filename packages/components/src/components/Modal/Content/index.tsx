import {
  useDismiss,
  useFloating,
  useFocusTrap,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Transition from '../../Transition';
import { useModalContext } from '../Context';
import IContent from './IContent';

export type ContentType = React.FC<IContent>;

const Content: ContentType = ({
  children,
  transition,
  className,
  ...props
}) => {
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

  const contentClassName = twMerge(
    'left-1/2 top-1/2 fixed z-50 block w-full max-w-2xl transition duration-150 ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg outline-none',
    className,
  );

  return (
    <Transition
      show={open}
      as="div"
      {...getFloatingProps({
        ref: floating,
      })}
      {...transition}
      className={contentClassName}
      {...props}
    >
      {children}
    </Transition>
  );
};

export default Content;
