import React, {
  Key,
  FC,
  useState,
  useMemo,
  Fragment,
  useRef,
  useEffect,
} from "react";
import { Combobox } from "@headlessui/react";
import tw from "twin.macro";
import { styled } from "../../stitches.config";
import { useFloating, shift, flip, offset } from "@floating-ui/react-dom";

import useSelectValue from "../FancySelect/useSelectValue";
import Input from "../Input";
import FancySelect from "../FancySelect";

import IComboBox from "./IComboBox";
import { XCircleIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";

const InputContainer = styled("div", {
  ...tw`relative w-full`,
});

const ClearIconContainer = styled("button", {
  ...tw`top-1/2 right-2 w-7 h-7 hover:text-gray-500 absolute flex text-gray-300 transition-colors duration-150 ease-in-out transform -translate-y-1/2`,
});

const OptionsContainer = styled("div", {
  ...tw`shadow-base max-h-60 absolute w-full overflow-auto bg-white border border-gray-300 rounded-lg`,
});

const ComboBox: FC<IComboBox> = ({
  value,
  defaultValue,
  onChange,
  options,
  placeholder,
  disabled,
  error,
  optionRenderer,
  displayValue,
}) => {
  const [query, setQuery] = useState("");

  const { value: selected, onChange: handleChange } = useSelectValue({
    value,
    defaultValue,
    onChange,
  });

  const { x, y, refs, floating, reference, update } = useFloating({
    placement: "bottom",
    middleware: [shift(), flip(), offset(5)],
  });

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.text.toLowerCase().includes(query.toLowerCase());
        });

  const selectedOption = useMemo(() => {
    if (!selected) {
      return undefined;
    }

    return options.find((option) => option.id === selected);
  }, [options, selected]);

  const clearSelection = () => {
    setQuery("");
    handleChange("");
    if (refs.reference.current) {
      //@ts-ignore
      refs.reference.current.value = "";
    }
  };

  useEffect(() => {
    update();
  }, [query]);

  return (
    <Combobox
      as="div"
      value={selected}
      onChange={handleChange}
      disabled={disabled}
      className="relative w-full"
    >
      <InputContainer>
        <Combobox.Input
          as={Input}
          ref={reference}
          onChange={(event: any) => setQuery(event.target.value)}
          displayValue={() => {
            if (displayValue) {
              return displayValue(selectedOption);
            }

            return selectedOption ? selectedOption.text : "";
          }}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
        />
        {Boolean(selected) && !disabled && (
          <ClearIconContainer onClick={clearSelection}>
            <XCircleIcon />
          </ClearIconContainer>
        )}
      </InputContainer>

      <Combobox.Options
        as={OptionsContainer}
        ref={floating}
        style={{ top: y ?? "", left: x ?? "" }}
      >
        {filteredOptions.length === 0 ? (
          <Combobox.Option
            as={FancySelect.Option}
            key="none"
            value="none"
            disabled
            active={false}
            selected={false}
          >
            No items matche your search query.
          </Combobox.Option>
        ) : (
          filteredOptions.map((option) => (
            <Combobox.Option
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
                  <FancySelect.Option
                    active={active}
                    selected={selected}
                    disabled={disabled}
                  >
                    <span>{option.text}</span>
                    {selected && (
                      <span className="w-5 h-5">
                        <CheckIcon />
                      </span>
                    )}
                  </FancySelect.Option>
                );
              }}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  );
};

export default ComboBox;
