import { format } from 'date-fns';
import React, { FC, useEffect, useRef } from 'react';
import tw from 'twin.macro';

import { styled } from '../../../../stitches.config';
import ICell from './ICell';

const CellContainer = styled('div', {
  ...tw`flex items-center justify-center w-10 h-10 text-sm text-gray-500 rounded-none`,
  variants: {
    hovered: {
      true: {},
    },
    selected: {
      true: {},
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

const Cell: FC<ICell> = ({
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
  const ref = useRef<HTMLDivElement>(null);

  function handleFocus() {
    onHover && !blocked && onHover(date);
  }

  function handleHovered() {
    onHover && !blocked && onHover(date);
  }

  useEffect(() => {
    if (!ref.current || !hovered) {
      return;
    }

    ref.current.focus();
  }, [ref, hovered]);

  if (outOfRange) {
    return <div></div>;
  }

  return (
    <CellContainer
      ref={ref}
      role="button"
      aria-selected={selected}
      data-date={format(date as Date, 'Y-MM-dd')}
      data-cell-type="day"
      tabIndex={
        selected ||
        hovered ||
        (date?.getDate() === 1 && !blocked && !outOfRange)
          ? 0
          : -1
      }
      selected={selected}
      isFirstOfRange={isFirstOfRange}
      isLastOfRange={isLastOfRange}
      outOfRange={outOfRange}
      hovered={hovered}
      blocked={blocked}
      onClick={() => onSelect && !blocked && onSelect(date as Date)}
      onMouseOver={handleHovered}
      onFocus={handleFocus}
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
