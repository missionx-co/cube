import { HTMLProps } from 'react';

import { MonthNavigation } from '../ICalendarUI';

export default interface IHeader
  extends HTMLProps<HTMLElement>,
    MonthNavigation {
  month: Date;
}
