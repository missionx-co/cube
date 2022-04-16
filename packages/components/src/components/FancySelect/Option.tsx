import { CheckIcon } from '@heroicons/react/outline';
import { StyledComponentType } from '@stitches/core/types/styled-component';
import React, { FC, Fragment, HTMLProps, Key, forwardRef } from 'react';
import tw from 'twin.macro';

import { styled } from '../../stitches.config';
import { Option as OptionModal, OptionRenderer } from './IFancySelect';
import { useSelectContext } from './SelectContext';

const CheckIconContainer = styled('span', tw`flex items-center w-5 h-5`);

interface IOption extends HTMLProps<HTMLLIElement> {
  option: OptionModal;
  index: number;
  active: boolean;
  selected: boolean;
  optionRenderer?: OptionRenderer;
}

export type OptionType = FC<IOption>;

export const OptionLI: StyledComponentType<any> = styled('li', {
  ...tw`flex flex-row justify-between px-4 py-2`,
  variants: {
    active: {
      true: {
        ...tw`bg-gray-100`,
      },
    },
    selected: {
      true: {
        ...tw`bg-primary-100`,
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
  index,
  active,
  selected,
  option,
  optionRenderer,
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
        <CheckIconContainer>
          <CheckIcon />
        </CheckIconContainer>
      )}
    </OptionLI>
  );
};

export default Option;
