const ONE_DAY = 24 * 60 * 60 * 1000; /* hrs * mins * secs * ms */

/**
 * Given a javascript Date object, returns a formatted date string
 * @param {Date} date
 * @returns {string} formatted in MMM DD, YYYY
 */
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}
/**
 * Calculate number of days between two JS Date objects
 * @param endDate
 * @param startDate
 * @returns number of days between two dates
 */
export function calculateTimeDelta(endDate: Date, startDate: Date): number {
  endDate = new Date(endDate);
  startDate = new Date(startDate);
  const diffDays = Math.round(
    Math.abs((endDate.getTime() - startDate.getTime()) / ONE_DAY)
  );
  return diffDays;
}
