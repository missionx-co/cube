import { AriaRadioProps } from '@react-types/radio';
import { ReactNode } from 'react';

export default interface IRadio extends Omit<AriaRadioProps, 'isDisabled'> {
  className?: string;
  containerClassName?: string;
  area?: 'base' | 'sm';
  variant?: 'outline' | 'filled';
  disabled?: boolean;
  icon?: () => ReactNode;
}
