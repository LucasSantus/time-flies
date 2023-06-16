/**
 * Formats two separated numbers into a single number.
 * @param timeLeft The number on the left to be formatted.
 * @param timeRight The number on the right to be formatted.
 * @returns A formatted single number combining the number on the left and the number on the right.
 */
export function formatNumberToSeparatedTimes(
  timeLeft: number,
  timeRight: number
) {
  return Number(`${timeLeft}${timeRight}`);
}
