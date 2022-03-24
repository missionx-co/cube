import React, { FC, HTMLProps, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

interface IItem extends HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  children:
    | ReactNode
    | ReactNode[]
    | ((props: { active: boolean; disabled: boolean }) => ReactNode);
}

const StyledItem: StyledComponentType<any> = styled("button", {
  ...tw`disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 w-full px-4 py-2 text-left text-gray-900`,
  variants: {
    active: {
      true: {
        ...tw`bg-gray-100`,
      },
    },
  },
});

export type ItemType = FC<IItem>;

const Item: ItemType = ({ disabled, children, ...props }) => {
  return (
    <Menu.Item disabled={disabled}>
      {({ active, disabled }) => {
        if (typeof children === "function") {
          return children({ active, disabled });
        }

        return (
          <StyledItem active={active} disabled={disabled} {...props}>
            {children}
          </StyledItem>
        );
      }}
    </Menu.Item>
  );
};

export default Item;
