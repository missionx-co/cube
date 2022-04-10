import { ITransition } from '../IModal';

export default interface IOverlay {
  className?: string;
  lockScroll?: boolean;
  transition?: ITransition;
}
