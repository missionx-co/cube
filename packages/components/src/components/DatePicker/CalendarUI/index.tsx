import { format } from 'date-fns';
import React, { FC, useMemo, useState } from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
import Calendar from './Calendar';
import Cell from './Cell';
import Header from './Header';
import ICalendarUI from './ICalendarUI';

const DaysContainer = styled('div', tw`grid grid-cols-7`);
const WeekDayContainer = styled(
  'span',
  tw`flex items-center justify-center w-10 h-10 mb-3 text-sm text-gray-400 border-b border-gray-300 border-dotted`,
);

const CalendarUI: FC<ICalendarUI> = ({
  hoveredDate,
  datePickerValue,
  onHover,
  onSelect,
  onNextMonthClick,
  onNextYearClick,
  onPreviousMonthClick,
  onPreviousYearClick,
  month,
  calendar,
}) => {
  const days = useMemo(() => calendar.days(month), [calendar, month]);

  return (
    <div>
      <Header
        month={month}
        onNextMonthClick={onNextMonthClick}
        onPreviousMonthClick={onPreviousMonthClick}
        onNextYearClick={onNextYearClick}
        onPreviousYearClick={onPreviousYearClick}
      />
      <DaysContainer>
        {days.slice(0, 7).map((day) => {
          const key = format(day, 'E');

          return <WeekDayContainer key={key}>{key}</WeekDayContainer>;
        })}
        {days.map((day) => (
          <Cell
            date={day}
            key={format(day, 'Y-M-d')}
            isFirstOfRange={datePickerValue.isFirstOfRange(day)}
            isLastOfRange={datePickerValue.isLastOfRange(day)}
            selected={datePickerValue.isDateSelected(day)}
            hovered={datePickerValue.isDateHovered(day, hoveredDate)}
            blocked={calendar.isDateDisabled(day)}
            outOfRange={!calendar.isDateOfMonth(day, month)}
            onHover={onHover}
            onSelect={onSelect}
          >
            {format(day, 'd')}
          </Cell>
        ))}
      </DaysContainer>
    </div>
  );
};

export default CalendarUI;
