import { CheckIcon } from '@heroicons/react/outline';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, HTMLProps, Key, forwardRef } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import { useSelectContext } from './SelectContext';

const CheckIconContainer = styled('span', tw`flex items-center w-5 h-5`);

interface IOption extends HTMLProps<HTMLLIElement> {
  value: string;
  index: number;
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export type OptionType = FC<IOption>;

const OptionLI: StyledComponentType<any> = styled('li', {
  ...tw`flex flex-row justify-between px-4 py-2`,
  variants: {
    active: {
      true: {
        ...tw`bg-gray-50`,
      },
    },
    selected: {
      true: {
        ...tw`bg-gray-50`,
      },
    },
    disabled: {
      true: {
        ...tw`text-gray-500 cursor-not-allowed`,
      },
      false: {
        ...tw`hover:bg-gray-50 text-gray-900 cursor-pointer`,
      },
    },
  },
});

export const Option: FC<IOption> = ({
  children,
  id,
  index,
  active,
  selected,
  disabled,
  value,
  ...props
}) => {
  const {
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
  } = useSelectContext();

  function handleSelect() {
    if (disabled) {
      return;
    }
    setSelectedIndex(index);
    onChange(value as string);
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

  return (
    <OptionLI
      disabled={disabled}
      active={active}
      selected={selected}
      role={'option'}
      ref={(node: any) => {
        listRef.current[index] = node;
      }}
      tabIndex={active ? 0 : 1}
      aria-selected={active && selected}
      aria-disabled={disabled}
      data-selected={selected}
      {...getItemProps({
        onClick: handleSelect,
        onKeyDown: handleKeyDown,
      })}
      {...props}
    >
      {children}
      {selected && (
        <CheckIconContainer>
          <CheckIcon />
        </CheckIconContainer>
      )}
    </OptionLI>
  );
};

export default Option;
