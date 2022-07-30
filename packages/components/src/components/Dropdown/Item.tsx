import { getItemStyles } from '@cube-ui/styles/dist/dropdown';
import { Menu } from '@headlessui/react';
import React, { FC, HTMLProps, ReactNode } from 'react';

interface IItem extends HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  children:
    | ReactNode
    | ReactNode[]
    | ((props: { active: boolean; disabled: boolean }) => ReactNode);
}

export type ItemType = FC<IItem>;

const Item: ItemType = ({ disabled, children, className, type, ...props }) => {
  return (
    <Menu.Item disabled={disabled}>
      {({ active, disabled }) => {
        if (typeof children === 'function') {
          return children({ active, disabled });
        }

        return (
          <button
            type={type as any}
            disabled={disabled}
            className={getItemStyles(active, className)}
            {...props}
          >
            {children}
          </button>
        );
      }}
    </Menu.Item>
  );
};

export default Item;
