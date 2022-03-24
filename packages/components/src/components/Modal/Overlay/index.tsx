import React from "react";
import tw from "twin.macro";
import { Transition, Dialog } from "@headlessui/react";
import { styled } from "../../../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

import IOverlay from "./IOverlay";
import defaultProps from "./default-props";

const StyledOverlay: StyledComponentType<any> = styled(Dialog.Overlay, {
  ...tw`bg-opacity-30 fixed inset-0 z-40 flex w-full h-full bg-black`,
});

const Overlay: React.FC<IOverlay> = ({ className, transition, children }) => {
  return (
    <Transition.Child
      as={React.Fragment}
      enter={transition?.enter}
      enterFrom={transition?.enterFrom}
      enterTo={transition?.enterTo}
      leave={transition?.leave}
      leaveFrom={transition?.leaveFrom}
      leaveTo={transition?.leaveTo}
    >
      <StyledOverlay className={className}>{children}</StyledOverlay>
    </Transition.Child>
  );
};

Overlay.defaultProps = defaultProps;

export default Overlay;
