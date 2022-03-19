import React, { FC } from "react";
import { useListBoxSection } from "react-aria";
import tw from "twin.macro";
import { styled } from "../../../stitches.config";

import Option from "./Option";
import { findOption } from "./utils";
import { Option as OptionModel } from "../ISelect";
import { SectionProps } from "./IListBox";

const TitleContainer = styled("span", {
  ...tw`py-2.5 block px-4 text-xs font-semibold text-gray-900 uppercase`,
});

const title = ({ text, renderer, props, option }: any) => {
  if (renderer) {
    return renderer({ option, props });
  }

  if (!text) {
    return null;
  }

  return <TitleContainer {...props}>{text}</TitleContainer>;
};

const ListBoxSection: FC<SectionProps> = ({
  section,
  state,
  groupTitleRenderer,
  optionRenderer,
  option,
}) => {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <li {...itemProps}>
        {title({
          option,
          text: section.rendered,
          props: headingProps,
          renderer: groupTitleRenderer,
        })}

        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option
              optionRenderer={optionRenderer}
              key={node.key}
              item={node}
              state={state}
              option={
                findOption(
                  option.children as OptionModel[],
                  node.key
                ) as OptionModel
              }
            />
          ))}
        </ul>
      </li>
    </>
  );
};

export default ListBoxSection;
