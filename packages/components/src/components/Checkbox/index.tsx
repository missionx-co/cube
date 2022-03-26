import React, { FC, ReactNode } from "react";
import tw from "twin.macro";
import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-aria/focus";
import { CheckIcon } from "@heroicons/react/solid";

import { AriaCheckboxProps } from "@react-types/checkbox";
import { styled } from "../../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

interface ICheckbox extends AriaCheckboxProps {
  area?: "sm" | "base";
  variant?: "outline" | "filled";
  containerClassName?: string;
  className?: string;
  icon?: () => ReactNode;
}

const ContainerLabel = styled("label", tw`flex items-center`);

const VirtualCheckbox = styled("div", {
  ...tw`flex items-center justify-center border-2 rounded`,
  variants: {
    variant: {
      filled: {},
      outline: {},
    },
    area: {
      sm: tw`w-5 h-5`,
      base: tw`w-6 h-6`,
    },
    focus: {
      true: tw`ring-1 ring-primary-300`,
    },
    disabled: {
      true: tw`bg-gray-100 border-gray-200 cursor-not-allowed`,
      false: tw`hover:border-primary-600 hover:bg-primary-50 bg-white border-gray-300 cursor-pointer`,
    },
    selected: {
      true: tw`border-primary-600 bg-primary-50 text-primary-600`,
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      selected: true,
      css: tw`bg-primary-600 hover:bg-primary-600 text-white`,
    },
  ],
});

const Label = styled("span", tw`ml-2 text-sm font-medium text-gray-700`);

type CheckboxType = FC<ICheckbox> & {
  Label: StyledComponentType<any>;
};

const Checkbox: CheckboxType = ({
  area,
  variant,
  containerClassName,
  className,
  icon,
  ...props
}) => {
  let state = useToggleState(props);
  let ref = React.useRef<HTMLInputElement>(null);
  let { inputProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <ContainerLabel className={containerClassName}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <VirtualCheckbox
        disabled={inputProps.disabled}
        selected={state.isSelected}
        focus={isFocusVisible}
        area={area}
        variant={variant}
        className={className}
      >
        {state.isSelected &&
          (icon ? icon() : <CheckIcon className="fill-current" />)}
      </VirtualCheckbox>
      {props.children}
    </ContainerLabel>
  );
};

Checkbox.defaultProps = {
  area: "base",
  variant: "outline",
};

Checkbox.Label = Label;

export default Checkbox;
