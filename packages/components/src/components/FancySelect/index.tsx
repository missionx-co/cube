import React, { FC, Fragment, useMemo, useRef } from "react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";
import { Listbox, Transition } from "@headlessui/react";
import { useFloating, shift, flip, offset } from "@floating-ui/react-dom";
import { SelectorIcon } from "@heroicons/react/solid";

import useSelectValue from "./useSelectValue";
import Input, { InputType } from "./Input";
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

const FancySelect: FC<IFancySelect> & { Input: InputType } = ({
  options,
  placeholder,
  value,
  defaultValue,
  onChange,
  inputRenderer,
  disabled,
  error,
}) => {
  const button = useRef(null);
  const menu = useRef(null);

  const { value: selected, onChange: handleChange } = useSelectValue({
    value,
    defaultValue,
    onChange,
  });

  const { x, y, floating, reference } = useFloating({
    placement: "bottom",
    middleware: [
      shift(),
      flip(),
      offset(({ placement }) => {
        if (placement.includes("top")) {
          return 17;
        }
        return 5;
      }),
    ],
  });

  console.log({ x, y });

  const selectedOption = useMemo(() => {
    if (!selected) {
      return undefined;
    }

    return options.find((option) => option.id === selected);
  }, [options, selected]);

  return (
    <Listbox
      value={value}
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
            className={({ active }) =>
              `cursor-default select-none relative py-2 pl-10 pr-4 ${
                active ? "text-amber-900 bg-amber-100" : "text-gray-900"
              }`
            }
          >
            {option.text}
          </Listbox.Option>
        ))}
      </OptionsList>
    </Listbox>
  );
};

FancySelect.Input = Input;

export default FancySelect;
