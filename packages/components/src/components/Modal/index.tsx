import React from "react";
import { Transition, Dialog } from "@headlessui/react";

import IModal from "./IModal";

import Overlay from "./Overlay";
import Content, { ContentType } from "./Content";
import Title, { TitleType } from "./Title";
import Footer, { FooterType } from "./Footer";

const Modal: React.FC<IModal> & {
  Dialog: ContentType;
  Title: TitleType;
  Footer: FooterType;
} = ({ open, onClose, children }) => (
  <Transition show={open} as={React.Fragment}>
    <Dialog static open={open} onClose={onClose}>
      <Overlay />
      {children}
      {/* a workround focus-trap */}
      <button
        style={{
          width: "1px",
          height: "1px",
          position: "fixed",
          left: "-9999px",
        }}
      ></button>
    </Dialog>
  </Transition>
);

Modal.Dialog = Content;
Modal.Title = Title;
Modal.Footer = Footer;

export default Modal;
