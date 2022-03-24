import React from "react";
import tw from "twin.macro";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import Button from "../../Button";
import { styled } from "../../../stitches.config";

import ITitle from "./ITitle";
import { StyledComponentProps } from "@stitches/core/types/styled-component";

const TitleContainer: StyledComponentProps<any> = styled("header", {
  ...tw`flex items-center justify-center px-4 pt-4 pb-0 text-lg font-medium text-gray-900`,
});

const DialogTitle = styled("div", {
  ...tw`flex-1 w-full`,
});

const CloseButton = styled(Button, {
  ...tw`w-5 h-5`,
});

export type TitleType = React.FC<ITitle>;

const Title: TitleType = ({ onClose, children, ...props }) => {
  return (
    <TitleContainer {...props}>
      <Dialog.Title as={DialogTitle} className="flex-1 w-full">
        {children}
      </Dialog.Title>
      {onClose && (
        <CloseButton variant="link" color="error" onClick={onClose}>
          <XIcon />
        </CloseButton>
      )}
    </TitleContainer>
  );
};

export default Title;