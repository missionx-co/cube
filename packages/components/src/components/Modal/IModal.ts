export default interface IModal {
  open: boolean;
  onClose: () => any;
}

export interface ITransition {
  duration?: number;
  enter?: string;
  exit?: string;
}
