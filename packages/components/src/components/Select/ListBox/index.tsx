import React, { FC } from "react";
import { useListBox } from "react-aria";
import tw from "twin.macro";
import { StyledComponentType } from "@stitches/core/types/styled-component";

import { styled } from "../../../stitches.config";
import { findOption } from "./utils";

import ListBoxSection from "./ListBoxSection";
import Option from "./Option";

import IListBox from "./IListBox";
import { Option as OptionModel } from "../ISelect";

const Ul: StyledComponentType<any> = styled("ul", {
  ...tw`max-h-72 w-full overflow-x-hidden overflow-y-scroll outline-none`,
});

const ListBox: FC<IListBox> = ({
  groupTitleRenderer,
  optionRenderer,
  options,
  ...props
}) => {
  let ref = React.useRef<HTMLUListElement>(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <Ul {...listBoxProps} ref={listBoxRef} className="">
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListBoxSection
            groupTitleRenderer={groupTitleRenderer}
            optionRenderer={optionRenderer}
            key={item.key}
            section={item}
            state={state}
            option={findOption(options, item.key) as OptionModel}
          />
        ) : (
          <Option
            optionRenderer={optionRenderer}
            key={item.key}
            item={item}
            state={state}
            option={findOption(options, item.key) as OptionModel}
          />
        )
      )}
    </Ul>
  );
};

export default ListBox;
