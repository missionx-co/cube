import { FloatingPortal } from '@floating-ui/react-dom-interactions';
import React from 'react';

import Content, { ContentType } from './Content';
import { ModalContext } from './Context';
import Footer, { FooterType } from './Footer';
import IModal from './IModal';
import Overlay, { OverlayType } from './Overlay';
import Title, { TitleType } from './Title';

const Modal: React.FC<IModal> & {
  Overlay: OverlayType;
  Dialog: ContentType;
  Title: TitleType;
  Footer: FooterType;
} = ({ open, onClose, children }) => {
  return (
    <ModalContext.Provider value={{ open, onClose }}>
      <FloatingPortal>{children}</FloatingPortal>
    </ModalContext.Provider>
  );
};

Modal.Overlay = Overlay;
Modal.Dialog = Content;
Modal.Title = Title;
Modal.Footer = Footer;

export default Modal;
