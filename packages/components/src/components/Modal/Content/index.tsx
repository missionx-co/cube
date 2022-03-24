import React from "react";
import tw from "twin.macro";
import { Transition } from "@headlessui/react";
import { styled } from "../../../stitches.config";

import IContent from "./IContent";
import defaualtProps from "./default-props";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const ContentContainer: StyledComponentType<any> = styled("div", {
  ...tw`left-1/2 top-20 fixed z-50 block w-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg outline-none`,
});

export type ContentType = React.FC<IContent>;

const Content: ContentType = ({ children, transition, ...props }) => {
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
      <ContentContainer {...props}>{children}</ContentContainer>
    </Transition.Child>
  );
};

Content.defaultProps = defaualtProps;

export default Content;
