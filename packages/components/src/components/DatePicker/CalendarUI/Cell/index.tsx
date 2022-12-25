import { format } from 'date-fns';
import React, { FC, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import ICell from './ICell';

const styles = {
  base: 'flex items-center justify-center w-10 h-10 text-sm rounded-none',
  isFirstOfRange: 'bg-primary-600 text-white rounded-l-full',
  isLastOfRange: 'bg-primary-600 text-white rounded-r-full',
  outOfRange: 'text-gray-300',
  blocked: 'opacity-25 cursor-not-allowed',
  highlighted: 'bg-orange-100',
};

const Cell: FC<ICell> = ({
  children,
  date,
  isFirstOfRange,
  isLastOfRange,
  outOfRange,
  selected,
  hovered,
  blocked,
  highlighted,
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

  const className = twMerge(
    styles.base,
    highlighted && styles.highlighted,
    isFirstOfRange && styles.isFirstOfRange,
    isLastOfRange && styles.isLastOfRange,
    outOfRange && styles.outOfRange,
    hovered && !selected && 'bg-primary-50',
    selected && !isFirstOfRange && !isLastOfRange && 'bg-primary-50',
  );

  return (
    <div
      className={className}
      ref={ref}
      role="button"
      aria-selected={selected}
      data-date={format(date as Date, 'Y-MM-dd')}
      data-cell-type="day"
      tabIndex={selected || hovered || date?.getDate() === 1 ? 0 : 1}
      onClick={() => onSelect && !blocked && onSelect(date as Date)}
      onMouseOver={handleHovered}
      onFocus={handleFocus}
      aria-disabled={blocked}
      data-disabled={blocked}
    >
      {children}
    </div>
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
