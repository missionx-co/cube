import { ReactNode } from 'react';

export interface Prop {
  name: string;
  type: string;
  description?: ReactNode;
  default?: string;
}

export default interface IPropsList {
  props: Prop[];
}
