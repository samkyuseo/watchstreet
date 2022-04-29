/**
 * Add commas if applicable and two decimals
 * @param {number} num
 * @returns {string} formatted number XXXX.XX
 */
function formatTwoDecimals(num: number): string {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export { formatTwoDecimals };
