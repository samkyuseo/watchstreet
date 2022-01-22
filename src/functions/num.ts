/**
 * Add commas if applicable and two decimals
 * @param num
 * @returns formatted number
 */
function generateNeatVersion(num: number): string {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export { generateNeatVersion };
