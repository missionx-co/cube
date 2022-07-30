import { format } from 'date-fns';
import React, { FC, useMemo } from 'react';

import { useDatePickerContext } from '../useDataPicker';
import Cell from './Cell';
import Header from './Header';
import ICalendarUI from './ICalendarUI';

const CalendarUI: FC<ICalendarUI> = ({ month }) => {
  const { calendar, hoveredDate, onSelect, setHoveredDate, datePickerValue } =
    useDatePickerContext();
  const days = useMemo(() => calendar.days(month), [calendar, month]);

  return (
    <div>
      <Header month={month} />
      <div className="grid grid-cols-7">
        {days.slice(0, 7).map((day) => {
          const key = format(day, 'E');
          const dayOfWeek = format(day, 'EEEE');

          return (
            <abbr
              className="flex items-center justify-center w-10 h-10 mb-3 text-sm text-gray-400 border-b border-gray-300 border-dotted"
              title={dayOfWeek}
              key={key}
            >
              {key}
            </abbr>
          );
        })}
      </div>
      <div
        className="grid grid-cols-7"
        onMouseLeave={() => setHoveredDate(undefined)}
      >
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
            onSelect={onSelect}
            onHover={setHoveredDate}
          >
            {format(day, 'd')}
          </Cell>
        ))}
      </div>
    </div>
  );
};

export default CalendarUI;
