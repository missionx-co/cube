import { containerStyles } from '@cube-ui/styles/dist/dropdown';
import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { Menu } from '@headlessui/react';
import React, { ComponentType, ElementType, FC, Key } from 'react';
import { twMerge } from 'tailwind-merge';

import IDropdown from './IDropdown';
import Item, { ItemType } from './Item';

type IDropdownType = FC<IDropdown> & {
  Button: ComponentType<{ as: ElementType; [key: Key]: any }>;
  Item: ItemType;
};

const Dropdown: IDropdownType = ({ className, children, buttonRenderer }) => {
  const { x, y, refs, floating, reference } = useFloating({
    placement: 'bottom-start',
    middleware: [shift(), flip(), offset(5)],
  });

  return (
    <Menu as={'div'} className="relative">
      {buttonRenderer({ ref: reference })}
      <Menu.Items
        as="div"
        ref={floating}
        className={twMerge(containerStyles.base, className)}
        style={{ top: y ?? '', left: x ?? '' }}
      >
        {children}
      </Menu.Items>
    </Menu>
  );
};

Dropdown.Button = Menu.Button;
Dropdown.Item = Item;

export default Dropdown;
