import React from 'react';
import tw from 'twin.macro';

import { styled } from '../../../../stitches.config';
import ICell from './ICell';

const CellContainer = styled('div', {
  ...tw`focus:ring-2 focus:ring-primary-300 flex items-center justify-center w-10 h-10 text-sm text-gray-500 rounded-none`,
  variants: {
    hovered: {
      true: {},
    },
    selected: {
      true: {},
      false: tw`hover:bg-primary-50`,
    },
    isFirstOfRange: {
      true: tw`bg-primary-600 text-white rounded-l-full`,
    },
    isLastOfRange: {
      true: tw`bg-primary-600 text-white rounded-r-full`,
    },
    outOfRange: {
      true: tw`text-gray-300`,
    },
    blocked: {
      true: tw`opacity-25 cursor-not-allowed`,
    },
  },
  compoundVariants: [
    {
      hovered: true,
      selected: false,
      css: tw`bg-primary-50`,
    },
    {
      selected: true,
      isFirstOfRange: false,
      isLastOfRange: false,
      css: tw`bg-primary-50`,
    },
  ],
});

const Cell: React.FC<ICell> = ({
  className,
  children,
  date,
  isFirstOfRange,
  isLastOfRange,
  outOfRange,
  selected,
  hovered,
  blocked,
  onSelect,
  onHover,
}) => {
  return (
    <CellContainer
      role="button"
      selected={selected}
      isFirstOfRange={isFirstOfRange}
      isLastOfRange={isLastOfRange}
      outOfRange={outOfRange}
      hovered={hovered}
      blocked={blocked}
      onClick={() => onSelect && !blocked && onSelect(date as Date)}
      onMouseOver={() => onHover && !blocked && onHover(date)}
    >
      {children}
    </CellContainer>
  );
};

Cell.defaultProps = {
  isFirstOfRange: false,
  isLastOfRange: false,
  selected: false,
  hovered: false,
  blocked: false,
  isWeekdayLabel: false,
};
export default Cell;
