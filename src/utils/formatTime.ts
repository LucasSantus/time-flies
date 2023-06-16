/**
 * This function formats a numeric time value into a two-digit formatted string.
 * @param time The numeric time value to format.
 * @returns A formatted string of the time value, two digits long and filled with leading zero if necessary.
 */
export function formatTime(time: number): string {
  return String(time).padStart(2, "0");
}
