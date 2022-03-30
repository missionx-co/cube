import { AriaSwitchProps } from '@react-types/switch';

export default interface Switch
  extends Omit<
    AriaSwitchProps,
    'defaultSelected' | 'isSelected' | 'isDisabled' | 'isReadOnly'
  > {
  area?: 'sm' | 'base';
  containerClassname?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
