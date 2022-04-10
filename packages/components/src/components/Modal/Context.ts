import { createContext, useContext } from 'react';

interface IModalContext {
  open: boolean;
  onClose: () => any;
}

export const ModalContext = createContext<IModalContext>({
  open: false,
  onClose: () => {},
});

export const useModalContext = () => {
  return useContext(ModalContext);
};
