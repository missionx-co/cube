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
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, {
  FC,
  Fragment,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import useSelectValue from '../FancySelect/useSelectValue';
import IFancySelect, {
  Option as IOption,
  OptionGroupRenderer,
  OptionRenderer,
} from './IFancySelect';
import Input, { InputType } from './Input';
import Option, { OptionLI } from './Option';
import { SelectContext } from './SelectContext';
import { usePrevious } from './hooks';
import { flattenOptions } from './utils';

const Container = styled(FloatingOverlay, {
  ...tw`relative w-full`,
});

const SelectorIconContainer = styled('span', {
  ...tw`w-5 h-5`,
});

const OptionsList: StyledComponentType<any> = styled('div', {
  ...tw`max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm shadow-base absolute w-full overflow-auto bg-white border border-gray-300 rounded-md`,
});

const OptionsGroupTitle: StyledComponentType<any> = styled(
  'span',
  tw`px-4 py-2 text-sm text-gray-300`,
);

function renderOptions(
  options: (IOption & { presentation?: boolean })[],
  selectedIndex: number,
  activeIndex: number | null,
  optionGroupRenderer?: OptionGroupRenderer,
  optionRenderer?: OptionRenderer,
): ReactNode[] {
  let optionIndex = 0;
  const renderOptions: ReactNode[] = [];
  for (let option of options) {
    if (option.presentation) {
      const groupOptionTitleProps = {
        key: option.id,
        role: 'presentation',
        'aria-hidden': true,
      };

      renderOptions.push(
        optionGroupRenderer ? (
          optionGroupRenderer(option, groupOptionTitleProps)
        ) : (
          <OptionsGroupTitle {...groupOptionTitleProps}>
            - {option.text ?? option.value}
          </OptionsGroupTitle>
        ),
      );

      continue;
    }

    const index = optionIndex++;
    renderOptions.push(
      <Option
        key={option.id}
        active={activeIndex === index}
        selected={selectedIndex === index}
        index={index}
        option={option}
        optionRenderer={optionRenderer}
      >
        {option.text ?? option.value}
      </Option>,
    );
  }
  return renderOptions;
}

const FancySelect: FC<IFancySelect> & {
  Input: InputType;
  OptionsGroupTitle: StyledComponentType<any>;
  Option: StyledComponentType<any>;
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
  const { value: selected, onChange: onSelectedChange } = useSelectValue<
    string | undefined
  >({
    value,
    defaultValue,
    onChange,
  });

  const flattenedOptions = useMemo(() => flattenOptions(options), [options]);
  const indexIdParis = useMemo(
    () => flattenedOptions.map((option) => option.id),
    [options],
  );

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const listContentRef = useRef(indexIdParis);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(
    listContentRef.current.indexOf(selected as string),
  );

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
        onMatch: open ? setActiveIndex : setSelectedIndex,
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
  useLayoutEffect(() => {
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
  useLayoutEffect(() => {
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
        setSelectedIndex,
        activeIndex,
        setActiveIndex,
        listRef: listItemsRef,
        setOpen,
        onChange: onSelectedChange,
        getItemProps,
      }}
    >
      {inputRenderer ? (
        inputRenderer({
          ...selectInputProps,
          option:
            selectedIndex !== -1 ? flattenedOptions[selectedIndex] : undefined,
        })
      ) : (
        <Input {...selectInputProps}>
          <span>
            {selectedIndex === -1
              ? placeholder
              : flattenedOptions[selectedIndex].text ??
                flattenedOptions[selectedIndex].value}
          </span>
          <SelectorIconContainer>
            <SelectorIcon />
          </SelectorIconContainer>
        </Input>
      )}

      {open && (
        <Container lockScroll>
          <OptionsList
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
          </OptionsList>
        </Container>
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
