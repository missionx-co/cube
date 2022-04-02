import {
  isAfter as dateFnsIsAfter,
  isBefore as dateFnsIsBefore,
  endOfDay,
  isWithinInterval,
  startOfDay,
} from 'date-fns';

/**
 * check if two dates are equal
 * @param date
 * @param anotherDate
 */
export function isEqual(date: Date, anotherDate: Date) {
  return (
    date.getFullYear() === anotherDate.getFullYear() &&
    date.getMonth() === anotherDate.getMonth() &&
    date.getDate() === anotherDate.getDate()
  );
}

/**
 * is date before dateToComppare
 * @param date
 * @param dateToCompare
 */
export function isBefore(date: Date, dateToCompare: Date) {
  return dateFnsIsBefore(date, startOfDay(dateToCompare));
}

/**
 * is date after dateToComppare
 * @param date
 * @param dateToCompare
 */
export function isAfter(date: Date, dateToCompare: Date) {
  return dateFnsIsAfter(date, endOfDay(dateToCompare));
}

/**
 * check if date is in range
 * @param date
 * @param range
 */
export function isInRange(
  date: Date,
  { start, end }: { start: Date; end: Date },
) {
  return isWithinInterval(date, {
    start: startOfDay(start),
    end: endOfDay(end),
  });
}
