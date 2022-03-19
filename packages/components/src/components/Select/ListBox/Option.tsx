import React, { FC } from "react";
import tw from "twin.macro";
import { useOption } from "react-aria";
import { CheckIcon } from "@heroicons/react/solid";

import { styled } from "../../../stitches.config";
import { OptionProps } from "./IListBox";

const StyledLi = styled("li", {
  ...tw`py-2.5 flex items-center justify-between px-4 text-sm text-gray-700 outline-none cursor-default`,
  variants: {
    focus: {
      true: {
        ...tw`bg-gray-50`,
      },
    },
    disabled: {
      true: {
        ...tw`text-gray-200 bg-transparent cursor-not-allowed`,
      },
      false: {
        ...tw`hover:bg-gray-50`,
      },
    },
  },
});

const StyledIcon = styled(CheckIcon, {
  ...tw`w-5 h-5 text-pink-600`,
});

const Option: FC<OptionProps> = ({ optionRenderer, option, item, state }) => {
  let ref = React.useRef<HTMLLIElement>(null);
  let { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  if (optionRenderer) {
    return optionRenderer({
      option,
      disabled: isDisabled,
      focus: isFocused,
      selected: isSelected,
      props: optionProps,
    });
  }

  return (
    <StyledLi
      focus={isFocused}
      disabled={isDisabled}
      {...optionProps}
      ref={ref}
    >
      {item.rendered}
      {isSelected && <StyledIcon aria-hidden="true" />}
    </StyledLi>
  );
};

export default Option;
