import React, { FC, Key } from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria";

import Popover from "../../Popover";
import ListBox from "../ListBox";

import {
  Container,
  ValueContainer,
  PlaceholderContainer,
  SelectorIconContainer,
} from "./styles";

export interface IFancySelect
  extends Omit<
    AriaSelectProps<any>,
    | "label"
    | "description"
    | "errorMessage"
    | "validationState"
    | "isRequired"
    | "shouldFlip"
    | "selectedKey"
    | "onSelectionChange"
    | "isDisabled"
  > {
  error?: boolean;
  disabled?: boolean;
  value?: Key;
  onChange?: (key: Key) => any;
}

const FancySelect: FC<IFancySelect> = ({
  error,
  value,
  onChange,
  disabled,
  ...props
}) => {
  const reactAriaProps = {
    ...props,
    isDisabled: disabled,
    selectedKey: value,
    onSelectionChange: onChange,
  };

  let state = useSelectState(reactAriaProps);

  let ref = React.useRef(null);
  let { triggerProps, valueProps, menuProps } = useSelect(
    reactAriaProps,
    state,
    ref
  );

  let { buttonProps } = useButton(
    {
      ...triggerProps,
      isDisabled: disabled,
    },
    ref
  );

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Container>
      <HiddenSelect state={state} triggerRef={ref} name={props.name} />
      <ValueContainer
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        error={error}
        focus={state.isOpen}
      >
        <PlaceholderContainer
          {...valueProps}
          selected={Boolean(state.selectedItem)}
        >
          {state.selectedItem ? state.selectedItem.rendered : props.placeholder}
        </PlaceholderContainer>
        <SelectorIconContainer focus={isFocusVisible} />
      </ValueContainer>
      {state.isOpen && (
        <Popover triggerRef={ref} isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </Container>
  );
};

FancySelect.defaultProps = {
  error: false,
  disabled: false,
};

export default FancySelect;
