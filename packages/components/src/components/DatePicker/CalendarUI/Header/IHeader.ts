import { HTMLProps } from 'react';

export default interface IHeader extends HTMLProps<HTMLElement> {
  month: Date;
}
