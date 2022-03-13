import tw from "twin.macro";
import { SelectorIcon } from "@heroicons/react/solid";
import { styled } from "../../../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

export const Container: StyledComponentType<any> = styled("div", {
  ...tw`relative inline-flex flex-col w-full`,
});

export const ValueContainer: StyledComponentType<any> = styled("button", {
  ...tw`px-3.5 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:cursor-not-allowed relative flex items-center justify-between w-full border rounded-lg`,
  variants: {
    error: {
      true: {
        ...tw`border-error-300 focus:ring-error-300`,
      },
      false: {
        ...tw`focus:border-primary-300 focus:ring-primary-300 border-gray-300`,
      },
    },
    focus: {
      true: {
        ...tw`border-primary-300 ring-primary-300 ring-2`,
      },
    },
  },
  compoundVariants: [
    {
      error: true,
      focus: true,
      css: {
        ...tw`border-error-300 ring-error-300`,
      },
    },
  ],
});

export const PlaceholderContainer: StyledComponentType<any> = styled("span", {
  variants: {
    selected: {
      true: {
        ...tw`text-gray-900`,
      },
      false: {
        ...tw`text-gray-500`,
      },
    },
  },
});

export const SelectorIconContainer: StyledComponentType<any> = styled(
  SelectorIcon,
  {
    ...tw`w-5 h-5`,
    variants: {
      focus: {
        true: {
          ...tw`text-pink-500`,
        },
        false: {
          ...tw`text-gray-500`,
        },
      },
    },
  }
);
