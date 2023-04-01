export function formatTime(time: number): string {
  return String(time).padStart(2, '0');
}
