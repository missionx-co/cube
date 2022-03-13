import tw from "twin.macro";
import React, { FC, useLayoutEffect } from "react";
import { useFloating, shift, flip, offset } from "@floating-ui/react-dom";
import { useOverlay, DismissButton, FocusScope } from "react-aria";
import { styled } from "../../stitches.config";

import { StyledComponentType } from "@stitches/core/types/styled-component";
import IPopover from "./IPopover";

const Container: StyledComponentType<any> = styled("div", {
  ...tw`absolute z-10 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-md`,
});

const Popover: FC<IPopover> = (props) => {
  const { x, y, refs, floating, reference, strategy } = useFloating({
    placement: "bottom",
    middleware: [shift(), flip(), offset()],
  });
  const { isOpen, onClose, children } = props;

  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: false,
    },
    refs.floating
  );

  useLayoutEffect(() => {
    reference(props.triggerRef.current);
  }, [props.triggerRef.current]);

  return (
    <FocusScope restoreFocus>
      <Container
        ref={floating}
        {...overlayProps}
        style={{ potition: strategy, top: y ?? "", left: x ?? "" }}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </Container>
    </FocusScope>
  );
};

export default Popover;
