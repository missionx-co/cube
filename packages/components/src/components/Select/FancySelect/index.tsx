import React, { FC, Key, ReactNode } from "react";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria";

import { mapItemsToAriaChildren } from "./utils";

import Popover from "../../Popover";
import ListBox from "../ListBox";

import { Container } from "./styles";
import { findOption } from "../ListBox/utils";

import Input, { IInput } from "./Input";
import IFancySelect from "./IFancySelect";
import Option from "../ListBox/Option";
import { OptionProps } from "../ListBox/IListBox";

const FancySelect: FC<IFancySelect> & {
  Input: FC<IInput>;
  Option: FC<OptionProps>;
} = ({
  error,
  value,
  onChange,
  disabled,
  options,
  fancySelectButtonRenderer,
  groupTitleRenderer,
  optionRenderer,
  ...props
}) => {
  const handleChange = (key: Key) => {
    onChange && onChange(findOption(options, key));
  };

  const reactAriaProps = {
    ...props,
    isDisabled: disabled,
    selectedKey: value,
    onSelectionChange: handleChange,
    children: mapItemsToAriaChildren(options),
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

      {fancySelectButtonRenderer ? (
        fancySelectButtonRenderer({
          error,
          ref: ref,
          open: state.isOpen,
          focus: isFocusVisible,
          option: state.selectedItem
            ? findOption(options, state.selectedItem.key)
            : null,
          props: mergeProps(buttonProps, focusProps),
          valueProps,
        })
      ) : (
        <Input
          //@ts-ignore
          ref={ref}
          valueProps={valueProps}
          placeholder={props.placeholder}
          error={error}
          open={state.isOpen}
          focus={isFocusVisible}
          option={
            state.selectedItem
              ? findOption(options, state.selectedItem.key)
              : null
          }
          {...mergeProps(buttonProps, focusProps)}
        />
      )}

      {state.isOpen && (
        <Popover triggerRef={ref} isOpen={state.isOpen} onClose={state.close}>
          <ListBox
            {...menuProps}
            state={state}
            options={options}
            groupTitleRenderer={groupTitleRenderer}
            optionRenderer={optionRenderer}
          />
        </Popover>
      )}
    </Container>
  );
};

FancySelect.defaultProps = {
  error: false,
  disabled: false,
};

FancySelect.Input = Input;
FancySelect.Option = Option;

export default FancySelect;
