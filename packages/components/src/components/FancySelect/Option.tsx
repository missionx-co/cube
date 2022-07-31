import { getOptionStyles } from '@cube-ui/styles/dist/fancy-select';
import { CheckIcon } from '@heroicons/react/outline';
import React, { FC, Fragment, HTMLProps, Key, forwardRef } from 'react';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { Option as OptionModal, OptionRenderer } from './IFancySelect';
import { useSelectContext } from './SelectContext';

interface IOption extends HTMLProps<HTMLLIElement> {
  option: OptionModal;
  index: number;
  active: boolean;
  selected: boolean;
  optionRenderer?: OptionRenderer;
}

export type OptionType = ForwardedComponent<
  HTMLProps<HTMLLIElement> & {
    disabled?: boolean;
    active?: boolean;
    selected?: boolean;
  },
  HTMLLIElement
>;

export const OptionLI: OptionType = forwardRef(
  ({ className, disabled, active, selected, children, ...props }, ref) => {
    return (
      <li
        className={getOptionStyles({
          selected,
          active,
          disabled,
          className,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </li>
    );
  },
);

export const Option: FC<IOption> = ({
  children,
  index,
  active,
  selected,
  option,
  optionRenderer,
  className,
  ...props
}) => {
  const {
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    setActiveIndex,
    getItemProps,
  } = useSelectContext();

  function handleSelect() {
    if (option.disabled) {
      return;
    }
    setSelectedIndex(index);
    onChange(option.value as string);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (event.key === 'Enter') {
        handleSelect();
      }
    }
  }

  const optionProps = {
    disabled: option.disabled,
    active,
    selected,
    role: 'option',
    ref: (node: any) => {
      listRef.current[index] = node;
    },
    tabIndex: active ? 0 : 1,
    'aria-selected': active && selected,
    'aria-disabled': option.disabled,
    'data-selected': option.disabled,
    ...getItemProps({
      onClick: handleSelect,
      onKeyDown: handleKeyDown,
    }),
    ...props,
  };

  if (optionRenderer) {
    return <Fragment>{optionRenderer(option, optionProps)}</Fragment>;
  }

  return (
    <OptionLI {...optionProps}>
      {children}
      {selected && (
        <span className="flex items-center w-5 h-5">
          <CheckIcon />
        </span>
      )}
    </OptionLI>
  );
};

export default Option;
