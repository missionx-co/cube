import {
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react-dom-interactions';
import React, { FC, Fragment, useEffect, useRef, useState } from 'react';

import Input from '../Input';
import ICombobox, { Option } from './ICombobox';
import Item, { OptionType } from './Option';
import { InputContainer, PanelContainer } from './styles';

const Combobox: FC<ICombobox> & {
  Option: OptionType;
} = ({
  disabled,
  error,
  placeholder,
  onChange,
  fetchingOptionMessage,
  options,
  displayValue,
  optionRenderer,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Option[]>([]);
  const [searchQuery, updateSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  async function getOptions(searchQuery: string) {
    setLoading(true);
    const res = await options(searchQuery);
    setLoading(false);
    if (res === false) {
      setItems([]);
    }

    setItems(res as Option[]);
  }

  useEffect(() => {
    getOptions(searchQuery);
  }, [searchQuery]);

  const { x, y, reference, floating, strategy, context, refs, update } =
    useFloating({
      open,
      onOpenChange: setOpen,
      middleware: [
        offset(5),
        flip(),
        size({
          apply({ reference, height }) {
            Object.assign(refs.floating.current?.style ?? {}, {
              width: `${reference.width}px`,
              maxHeight: `${height}px`,
            });
          },
          padding: 10,
        }),
      ],
    });

  useEffect(() => {
    // Wait for `size` to have performed its work, avoids infinite loops
    // and jumps.
    const frame = requestAnimationFrame(() => {
      if (activeIndex != null) {
        listRef.current[activeIndex]?.scrollIntoView({
          block: 'nearest',
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
      }),
    ],
  );

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    updateSearchQuery(value);

    if (value) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  function onItemSelect(item: Option) {
    let inputValue;
    if (displayValue) {
      inputValue = displayValue(item);
    } else {
      inputValue = item.text ?? item.value;
    }
    updateSearchQuery(inputValue);
    setActiveIndex(null);
    setOpen(false);
    onChange && onChange(item.value);
  }

  useEffect(() => {
    if (open && refs.reference.current && refs.floating.current) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, update, refs.reference, refs.floating]);

  return (
    <Fragment>
      <InputContainer>
        <Input
          error={error}
          disabled={disabled}
          autoComplete="off"
          {...getReferenceProps({
            ref: reference,
            onChange: onInputChange,
            value: searchQuery,
            placeholder: placeholder ?? 'Select...',
            onKeyDown(event) {
              if (
                event.key === 'Enter' &&
                activeIndex != null &&
                items[activeIndex] &&
                !items[activeIndex].disabled
              ) {
                event.preventDefault();
                onItemSelect(items[activeIndex]);
              }
            },
            onBlur(event) {
              if (
                !refs.floating.current?.contains(
                  event.relatedTarget as HTMLElement | null,
                )
              ) {
                setOpen(false);
              }
            },
          })}
        />
      </InputContainer>

      {open && (
        <PanelContainer
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              left: x ?? '',
              top: y ?? '',
            },
          })}
        >
          <ul>
            {loading ? (
              <Item active={false} disabled>
                {fetchingOptionMessage}
              </Item>
            ) : items.length === 0 ? (
              <Item active={false} disabled>
                No results were found
              </Item>
            ) : (
              items.map((item, index) => {
                const props = getItemProps({
                  key: item.value,
                  ref(node) {
                    listRef.current[index] = node;
                  },
                  onClick() {
                    if (item.disabled) {
                      return;
                    }
                    onItemSelect(item);
                    (refs.reference.current as any)?.focus();
                  },
                });

                if (optionRenderer) {
                  return optionRenderer(item, {
                    ...props,
                    active: activeIndex === index,
                    disabled: item.disabled,
                  });
                }

                return (
                  <Item
                    {...props}
                    active={activeIndex === index}
                    disabled={item.disabled}
                  >
                    {item.text}
                  </Item>
                );
              })
            )}
          </ul>
        </PanelContainer>
      )}
    </Fragment>
  );
};

Combobox.defaultProps = {
  disabled: false,
  error: false,
  fetchingOptionMessage: 'Fetching options....',
};

Combobox.Option = Item;

export default Combobox;
