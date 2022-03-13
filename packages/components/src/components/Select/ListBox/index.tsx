import React, { FC } from "react";
import { useListBox } from "react-aria";
import tw from "twin.macro";
import { StyledComponentType } from "@stitches/core/types/styled-component";

import { styled } from "../../../stitches.config";

import ListBoxSection from "./ListBoxSection";
import Option from "./Option";

import IListBox from "./IListBox";

const Ul: StyledComponentType<any> = styled("ul", {
  ...tw`max-h-72 w-full overflow-x-hidden overflow-y-scroll outline-none`,
});

const ListBox: FC<IListBox> = (props) => {
  let ref = React.useRef<HTMLUListElement>(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <Ul {...listBoxProps} ref={listBoxRef} className="">
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </Ul>
  );
};

export default ListBox;
