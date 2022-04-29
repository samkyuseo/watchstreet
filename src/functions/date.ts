/**
 * Given a javascript Date object, returns a formatted date string
 * @param {Date} date
 * @returns {string} formatted in MMM DD, YYYY
 */
function formatDate(date: Date): string {
  return date.toLocaleDateString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}
export { formatDate };
