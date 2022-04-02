import { format } from 'date-fns';
import React, { FC, useMemo, useState } from 'react';
import tw from 'twin.macro';

import { styled } from '../../../stitches.config';
import DatePickerValue from '../DatePickerValueHelper';
import { CalendarOptions } from '../IDatePicker';
import Calendar from './Calendar';
import Cell from './Cell';
import Header from './Header';

interface ICalendarUI extends CalendarOptions {
  datePickerValue: DatePickerValue;
  hoveredDate?: Date;
  onHover: (date?: Date) => any;
  onSelect: (date: Date) => any;
}

const DaysContainer = styled('div', tw`grid grid-cols-7`);
const WeekDayContainer = styled(
  'span',
  tw`flex items-center justify-center w-10 h-10 mb-3 text-sm text-gray-400 border-b border-gray-300 border-dotted`,
);

const CalendarUI: FC<ICalendarUI> = ({
  firstDayOfWeek,
  disabledDates,
  minDate,
  maxDate,
  hoveredDate,
  datePickerValue,
  onHover,
  onSelect,
}) => {
  const calendar = new Calendar({
    firstDayOfTheWeek: firstDayOfWeek,
    disabledDates,
    minDate,
    maxDate,
  });

  const [activeMonth, setActiveMonth] = useState(
    calendar.getInitialMonth(datePickerValue),
  );

  const days = useMemo(
    () => calendar.days(activeMonth),
    [firstDayOfWeek, activeMonth],
  );

  function goToNextMonth() {
    setActiveMonth((activeMonth) => calendar.nextMonth(activeMonth));
  }

  function goToNextYear() {
    setActiveMonth((activeMonth) => calendar.nextYear(activeMonth));
  }

  function goToPreviousMonth() {
    setActiveMonth((activeMonth) => calendar.previousMonth(activeMonth));
  }

  function goToPreviousYear() {
    setActiveMonth((activeMonth) => calendar.previousYear(activeMonth));
  }

  return (
    <div>
      <Header
        month={activeMonth}
        onNextMonthClick={goToNextMonth}
        onPreviousMonthClick={goToPreviousMonth}
        onNextYearClick={goToNextYear}
        onPreviousYearClick={goToPreviousYear}
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
            outOfRange={!calendar.isDateOfMonth(day, activeMonth)}
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
