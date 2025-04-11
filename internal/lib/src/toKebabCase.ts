/**
 * Converts string to KebabCase
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */
export function toKebabCase(string: string): string {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
