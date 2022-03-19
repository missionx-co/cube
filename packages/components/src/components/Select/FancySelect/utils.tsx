import React, { Fragment } from "react";
import { Item, Section } from "react-stately";
import { Option } from "../ISelect";

export const mapItemsToAriaChildren = (options: Option[]) => {
  return options.map((option) => {
    if (option.children) {
      return (
        <Section key={option.id} title={option.text}>
          {/* @ts-ignore */}
          {mapItemsToAriaChildren(option.children)}
        </Section>
      );
    }

    return <Item key={option.id}>{option.text}</Item>;
  });
};
