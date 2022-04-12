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
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import { getClassName } from '../../utils';
import useSelectValue from '../FancySelect/useSelectValue';
import Transition from '../Transition';
import IFancySelect, { Option as IOption } from './IFancySelect';
import Input from './Input';
import Option from './Option';
import { SelectContext } from './SelectContext';
import { usePrevious } from './hooks';
import { flattenOptions } from './utils';

const Container = styled(FloatingOverlay, {
  ...tw`relative w-full transition duration-150 ease-in-out`,
});

const SelectorIconContainer = styled('span', {
  ...tw`w-5 h-5`,
});

const OptionsList: StyledComponentType<any> = styled('div', {
  ...tw`max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm shadow-base absolute w-full overflow-auto bg-white border border-gray-300 rounded-md`,
});

function renderOptions(
  options: IOption[],
  selectedIndex: number,
  activeIndex: number | null,
): ReactNode[] {
  let optionIndex = 0;
  const renderOptions: ReactNode[] = [];
  for (let option of options) {
    if (option.children && option.children.length) {
      renderOptions.push(
        <ul
          key={option.id}
          role="group"
          aria-labelledby={`floating-ui-select-${option.id}`}
        >
          <li
            role="presentation"
            id={`floating-ui-select-${option.id}`}
            aria-hidden="true"
          >
            {option.text ?? option.value}
          </li>
          {option.children.map((optionChild) => {
            const index = optionIndex++;
            const renderedOption = (
              <Option
                key={optionChild.id}
                active={activeIndex === index}
                selected={selectedIndex === index}
                disabled={Boolean(optionChild.disabled)}
                index={index}
                value={optionChild.value}
                id={optionChild.id}
              >
                {optionChild.text ?? optionChild.value}
              </Option>
            );

            return renderedOption;
          })}
        </ul>,
      );
      continue;
    }

    const index = optionIndex++;
    renderOptions.push(
      <Option
        key={option.id}
        active={activeIndex === index}
        selected={selectedIndex === index}
        disabled={Boolean(option.disabled)}
        index={index}
        value={option.value}
        id={option.id}
      >
        {option.text ?? option.value}
      </Option>,
    );
  }
  return renderOptions;
}

const FancySelect: FC<IFancySelect> = ({
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

    if (open && controlledScrolling && floating) {
      const item =
        activeIndex != null
          ? listItemsRef.current[activeIndex]
          : selectedIndex != null
          ? listItemsRef.current[selectedIndex]
          : null;

      if (item && prevActiveIndex != null) {
        const itemHeight =
          listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;

        const floatingHeight = floating.offsetHeight;
        const top = item.offsetTop;
        const bottom = top + itemHeight;

        if (top < floating.scrollTop) {
          floating.scrollTop -= floating.scrollTop - top + 5;
        } else if (bottom > floatingHeight + floating.scrollTop) {
          floating.scrollTop +=
            bottom - floatingHeight - floating.scrollTop + 5;
        }
      }
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
      <Input
        disabled={disabled}
        error={error}
        {...getReferenceProps({
          ref: reference,
        })}
      >
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
      {open && (
        <FloatingOverlay>
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
            {renderOptions(options, selectedIndex, activeIndex)}
          </OptionsList>
        </FloatingOverlay>
      )}
    </SelectContext.Provider>
  );
};

FancySelect.defaultProps = {
  placeholder: 'Please select....',
  onChange: (_: string | undefined) => {},
};

export default FancySelect;
