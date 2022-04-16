import {
  Placement,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useFocusTrap,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React, {
  Children,
  FC,
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import Transition from '../Transition';
import ITooltip from './ITooltip';

const TooltipContainer = styled(
  'div',
  tw`px-2.5 z-50 py-1 text-white transition duration-150 ease-in-out bg-gray-900 bg-opacity-75 rounded`,
);

const Tooltip: FC<ITooltip> = ({
  content,
  placement,
  showOn,
  children,
  transition,
  ...props
}) => {
  const totalChildrenCount = Children.count(children);
  if (totalChildrenCount > 1) {
    throw new Error('Tooltip component must only have one child.');
  }

  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context, refs, update } =
    useFloating({
      placement,
      open,
      onOpenChange: setOpen,
      middleware: [offset(5), flip(), shift()],
      strategy: 'fixed',
    });

  let interactions = [
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ];

  if (showOn === 'click') {
    interactions.push(
      useClick(context),
      useFocusTrap(context, { modal: false, order: ['reference', 'content'] }),
    );
  } else {
    interactions.push(useHover(context), useFocus(context));
  }

  const { getReferenceProps, getFloatingProps } = useInteractions(interactions);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [refs.reference, refs.floating, update, open]);

  return (
    <Fragment>
      {isValidElement(children) &&
        cloneElement(children, getReferenceProps({ ref: reference }))}
      <Transition
        show={open}
        {...transition}
        as={TooltipContainer}
        {...getFloatingProps({
          ref: floating,
          ...props,
          style: {
            position: strategy,
            top: y ?? '',
            left: x ?? '',
          },
        })}
      >
        {typeof content === 'function'
          ? content(() => {
              setOpen(false);
              (refs.reference.current as HTMLElement).focus();
            })
          : content}
      </Transition>
    </Fragment>
  );
};

Tooltip.defaultProps = {
  placement: 'top',
  showOn: 'hover',
};

export default Tooltip;
