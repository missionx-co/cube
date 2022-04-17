import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export default interface ForwardedComponent<Props, Ref>
  extends ForwardRefExoticComponent<
    PropsWithoutRef<Props> & RefAttributes<Ref>
  > {}
