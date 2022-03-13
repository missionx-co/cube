import React, { FC } from "react";
import { useListBoxSection } from "react-aria";
import tw from "twin.macro";
import { styled } from "../../../stitches.config";

import Option from "./Option";
import { SectionProps } from "./IListBox";

const Container = styled("li", {
  ...tw`text-sm text-gray-700`,
});

const TitleContainer = styled("span", {
  ...tw`py-2.5 block px-4 text-xs font-semibold text-gray-900 uppercase`,
});

const ListBoxSection: FC<SectionProps> = ({ section, state }) => {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <Container {...itemProps}>
        {section.rendered && (
          <TitleContainer {...headingProps}>{section.rendered}</TitleContainer>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ListBoxSection;
