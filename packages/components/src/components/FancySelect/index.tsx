import React, { FC, Fragment, useMemo, useRef } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";
import { Listbox } from "@headlessui/react";
import { useFloating, shift, flip, offset } from "@floating-ui/react-dom";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import useSelectValue from "./useSelectValue";
import Input, { InputType } from "./Input";
import Option, { OptionType } from "./Option";
import IFancySelect from "./IFancySelect";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const Container = styled("div", {
  ...tw`relative w-full`,
});

const SelectorIconContainer = styled("span", {
  ...tw`w-5 h-5`,
});

const OptionsList: StyledComponentType<any> = styled(Listbox.Options, {
  ...tw`max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm shadow-base absolute w-full overflow-auto bg-white border border-gray-300 rounded-md`,
});

const FancySelect: FC<IFancySelect> & {
  Input: InputType;
  Option: OptionType;
} = ({
  options,
  placeholder,
  value,
  defaultValue,
  onChange,
  inputRenderer,
  disabled,
  error,
  optionRenderer,
}) => {
  const { value: selected, onChange: handleChange } = useSelectValue({
    value,
    defaultValue,
    onChange,
  });

  const { x, y, floating, reference } = useFloating({
    placement: "bottom",
    middleware: [shift(), flip(), offset(5)],
  });

  const selectedOption = useMemo(() => {
    if (!selected) {
      return undefined;
    }

    return options.find((option) => option.id === selected);
  }, [options, selected]);

  return (
    <Listbox
      value={selected}
      onChange={handleChange}
      as={Container}
      disabled={disabled}
    >
      {inputRenderer ? (
        inputRenderer({
          ref: reference,
          selected: selectedOption,
          placeholder,
          disabled,
          error,
        })
      ) : (
        <Input disabled={disabled} error={error} ref={reference}>
          <span>{selectedOption ? selectedOption.text : placeholder}</span>
          <SelectorIconContainer>
            <SelectorIcon />
          </SelectorIconContainer>
        </Input>
      )}
      <OptionsList ref={floating} style={{ top: y ?? "", left: x ?? "" }}>
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option.id}
            disabled={option.disabled}
            as={Fragment}
          >
            {({ active, selected, disabled }) => {
              if (optionRenderer) {
                return optionRenderer({ active, selected, disabled, option });
              }
              return (
                <Option active={active} selected={selected} disabled={disabled}>
                  <span>{option.text}</span>
                  {selected && (
                    <span className="w-5 h-5">
                      <CheckIcon />
                    </span>
                  )}
                </Option>
              );
            }}
          </Listbox.Option>
        ))}
      </OptionsList>
    </Listbox>
  );
};

FancySelect.Input = Input;
FancySelect.Option = Option;

export default FancySelect;
