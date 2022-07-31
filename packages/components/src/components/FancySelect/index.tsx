import {
  FloatingOverlay,
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFocusTrap,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react-dom-interactions';
import { SelectorIcon } from '@heroicons/react/outline';
import React, {
  FC,
  HTMLProps,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

import IFancySelect, {
  OptionGroupRenderer,
  OptionRenderer,
  ProcessedOption,
} from './IFancySelect';
import Input, { InputType } from './Input';
import Option, { OptionLI, OptionType } from './Option';
import { SelectContext } from './SelectContext';
import { usePrevious } from './hooks';
import { flattenOptionsAndAddIndex } from './utils';

export type OptionsGroupTitleType = FC<HTMLProps<HTMLSpanElement>>;

const OptionsGroupTitle: OptionsGroupTitleType = ({
  children,
  className,
  ...props
}) => (
  <span
    className={twMerge('px-4 py-2 text-sm text-gray-300', className)}
    {...props}
  >
    {children}
  </span>
);

function renderOptions(
  options: ProcessedOption[],
  selectedIndex: number,
  activeIndex: number | null,
  optionGroupRenderer?: OptionGroupRenderer,
  optionRenderer?: OptionRenderer,
): ReactNode[] {
  return options.map((option) => {
    if (option.presentation) {
      const groupOptionTitleProps = {
        key: option.value,
        role: 'presentation',
        'aria-hidden': true,
      };

      return optionGroupRenderer ? (
        optionGroupRenderer(option, groupOptionTitleProps)
      ) : (
        <OptionsGroupTitle {...groupOptionTitleProps}>
          - {option.text ?? option.value}
        </OptionsGroupTitle>
      );
    }

    return (
      <Option
        key={option.value}
        active={activeIndex === option.index}
        selected={selectedIndex === option.index}
        index={option.index as number}
        option={option}
        optionRenderer={optionRenderer}
      >
        {option.text ?? option.value}
      </Option>
    );
  });
}

const FancySelect: FC<IFancySelect> & {
  Input: InputType;
  OptionsGroupTitle: OptionsGroupTitleType;
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
  optionGroupRenderer,
  optionRenderer,
}) => {
  const flattenedOptions = useMemo(
    () => flattenOptionsAndAddIndex(options),
    [options],
  );

  const pairs = useMemo(() => {
    const pairs = {
      optionIndexToValue: [] as string[],
      optionIndexToIndex: [] as number[],
    };

    for (let index = 0; index < flattenedOptions.length; index++) {
      const option = flattenedOptions[index];
      if (option.presentation) {
        continue;
      }
      pairs.optionIndexToValue[option.index as number] = option.value;
      pairs.optionIndexToIndex[option.index as number] = index;
    }

    return pairs;
  }, [flattenedOptions]);

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const listContentRef = useRef(pairs.optionIndexToValue);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(
    listContentRef.current.indexOf(
      value !== undefined
        ? value
        : defaultValue !== undefined
        ? defaultValue
        : '',
    ),
  );

  function handleSelectedIndexChange(index: number) {
    if (value !== undefined) {
      return;
    }
    setSelectedIndex(index);
  }

  const [controlledScrolling, setControlledScrolling] = useState(false);

  const prevActiveIndex = usePrevious<number | null>(activeIndex);

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    refs,
    middlewareData,
    update,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(5),
      flip(),
      size({
        apply({ reference }) {
          Object.assign(refs.floating.current?.style ?? {}, {
            width: `${reference.width}px`,
          });
        },
      }),
    ],
  });

  const floatingRef = refs.floating;

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useFocusTrap(context, { inert: true }),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : handleSelectedIndexChange,
        activeIndex,
        selectedIndex,
      }),
    ],
  );

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [refs.reference, refs.floating, open, update]);

  //focus on the first non-disabled element in case no item is selected
  useEffect(() => {
    if (!open || selectedIndex !== -1) {
      return;
    }

    const index = flattenedOptions.findIndex((option) => !option.disabled);
    if (index === -1) {
      return;
    }

    setActiveIndex(index);
    listItemsRef.current[index]?.focus();
  }, [open]);

  // Scroll the active or selected item into view when in `controlledScrolling`
  // mode (i.e. arrow key nav).
  useEffect(() => {
    const floating = floatingRef.current;

    if (!open || !controlledScrolling || !floating) {
      return;
    }

    const item =
      activeIndex != null
        ? listItemsRef.current[activeIndex]
        : selectedIndex != null
        ? listItemsRef.current[selectedIndex]
        : null;

    if (!item || prevActiveIndex == null) {
      return;
    }

    const itemHeight = listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;

    const floatingHeight = floating.offsetHeight;
    const top = item.offsetTop;
    const bottom = top + itemHeight;

    if (top < floating.scrollTop) {
      floating.scrollTop -= floating.scrollTop - top + 5;
      return;
    }

    if (bottom > floatingHeight + floating.scrollTop) {
      floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5;
    }
  }, [open, controlledScrolling, prevActiveIndex, activeIndex]);

  // Sync the height and the scrollTop values
  useEffect(() => {
    const floating = refs.floating.current;
    if (open && floating && floating.offsetHeight < floating.scrollHeight) {
      const item = listItemsRef.current[selectedIndex];
      if (item) {
        floating.scrollTop =
          item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
      }
    }
  }, [
    open,
    selectedIndex,
    refs.floating,
    refs.reference,
    // Always re-run this effect when the position has been computed so the
    // .scrollTop change works with fresh sizing.
    middlewareData,
  ]);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedIndex(listContentRef.current.indexOf(value));
      return;
    }

    if (defaultValue !== undefined) {
      setSelectedIndex(listContentRef.current.indexOf(defaultValue));
      return;
    }
  }, [value, defaultValue]);

  const selectInputProps = {
    disabled,
    error,
    ...getReferenceProps({
      ref: reference,
    }),
  };

  return (
    <SelectContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex: handleSelectedIndexChange,
        activeIndex,
        setActiveIndex,
        listRef: listItemsRef,
        setOpen,
        onChange: onChange as (value: string) => void,
        getItemProps,
      }}
    >
      {inputRenderer ? (
        inputRenderer({
          ...selectInputProps,
          option:
            selectedIndex !== -1
              ? flattenedOptions[pairs.optionIndexToIndex[selectedIndex]]
              : undefined,
        })
      ) : (
        <Input {...selectInputProps}>
          <span>
            {selectedIndex === -1
              ? placeholder
              : flattenedOptions[pairs.optionIndexToIndex[selectedIndex]]
                  .text ??
                flattenedOptions[pairs.optionIndexToIndex[selectedIndex]].value}
          </span>
          <span className="w-5 h-5">
            <SelectorIcon />
          </span>
        </Input>
      )}

      {open && (
        <FloatingOverlay lockScroll>
          <ul
            className="max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute z-50 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-md"
            {...getFloatingProps({
              ref: floating,
              style: {
                position: strategy,
                top: y ?? '',
                left: x ?? '',
                overflow: 'auto',
              },
              onPointerEnter() {
                setControlledScrolling(false);
              },
              onPointerMove() {
                setControlledScrolling(false);
              },
              onKeyDown() {
                setControlledScrolling(true);
              },
            })}
          >
            {renderOptions(
              flattenedOptions,
              selectedIndex,
              activeIndex,
              optionGroupRenderer,
              optionRenderer,
            )}
          </ul>
        </FloatingOverlay>
      )}
    </SelectContext.Provider>
  );
};

FancySelect.defaultProps = {
  placeholder: 'Please select....',
  onChange: (_: string | undefined) => {},
};

FancySelect.OptionsGroupTitle = OptionsGroupTitle;
FancySelect.Option = OptionLI;
FancySelect.Input = Input;

export default FancySelect;
