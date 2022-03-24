import React, { ComponentType, ElementType, FC, Key } from "react";
import tw from "twin.macro";
import { Menu } from "@headlessui/react";
import { useFloating, shift, flip, offset } from "@floating-ui/react-dom";
import { styled } from "../../stitches.config";

import Item, { ItemType } from "./Item";
import IDropdown from "./IDropdown";

type IDropdownType = FC<IDropdown> & {
  Button: ComponentType<{ as: ElementType; [key: Key]: any }>;
  Item: ItemType;
};

const ItemsContainer = styled("div", {
  ...tw`shadow-base max-h-60 focus:outline-none absolute flex flex-col w-56 overflow-auto bg-white border border-gray-300 rounded-lg outline-none`,
});

const Dropdown: IDropdownType = ({ className, children, buttonRenderer }) => {
  const { x, y, refs, floating, reference } = useFloating({
    placement: "bottom-start",
    middleware: [shift(), flip(), offset(5)],
  });

  return (
    <Menu as={"div"} className="relative">
      {buttonRenderer({ ref: reference })}
      <Menu.Items
        as={ItemsContainer}
        ref={floating}
        className={className}
        style={{ top: y ?? "", left: x ?? "" }}
      >
        {children}
      </Menu.Items>
    </Menu>
  );
};

Dropdown.Button = Menu.Button;
Dropdown.Item = Item;

export default Dropdown;
