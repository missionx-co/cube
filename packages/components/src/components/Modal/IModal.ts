export default interface IModal {
  open: boolean;
  onClose: () => any;
}

export interface ITransition {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
}
