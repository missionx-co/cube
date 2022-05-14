import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, useEffect } from 'react';
import { DismissButton, FocusScope, useOverlay } from 'react-aria';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import IPopover from './IPopover';

const Container: StyledComponentType<any> = styled('div', {
  ...tw`absolute z-10 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md`,
});

const Popover: FC<IPopover> = (props) => {
  const { x, y, refs, floating, reference, strategy } = useFloating({
    placement: 'bottom',
    middleware: [
      shift(),
      flip(),
      offset(({ placement }) => {
        if (placement.includes('top')) {
          return 17;
        }
        return 0;
      }),
    ],
  });
  const { isOpen, onClose, children } = props;

  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: false,
    },
    refs.floating,
  );

  useEffect(() => {
    reference(props.triggerRef.current);
  }, [props.triggerRef.current]);

  return (
    <FocusScope restoreFocus>
      <Container
        ref={floating}
        {...overlayProps}
        style={{ potition: strategy, top: y ?? '', left: x ?? '' }}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </Container>
    </FocusScope>
  );
};

export default Popover;
