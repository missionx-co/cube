import { getItemStyles } from '@cube-ui/styles/dist/dropdown';
import { Menu } from '@headlessui/react';
import React, { ForwardedRef, HTMLProps, ReactNode, forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';

interface IItem extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
  disabled?: boolean;
  className?:
    | string
    | ((props: { active: boolean; disabled: boolean }) => string);
  children:
    | ReactNode
    | ReactNode[]
    | ((props: {
        ref: ForwardedRef<any>;
        active: boolean;
        disabled: boolean;
      }) => ReactNode);
}

export type ItemType = ForwardedComponent<IItem, any>;

const Item: ItemType = forwardRef(
  ({ disabled, children, className, type, ...props }, ref) => {
    return (
      <Menu.Item disabled={disabled}>
        {({ active, disabled }) => {
          if (typeof children === 'function') {
            return children({ ref, active, disabled });
          }

          let classNames: string = '';
          if (className) {
            classNames =
              typeof className === 'function'
                ? className({ active, disabled })
                : className;
          }

          return (
            <button
              ref={ref}
              type={(type as any) || 'button'}
              disabled={disabled}
              className={getItemStyles(active, classNames)}
              {...props}
            >
              {children}
            </button>
          );
        }}
      </Menu.Item>
    );
  },
);

export default Item;
