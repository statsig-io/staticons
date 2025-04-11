/**
 * Merges classes into a single string
 *
 * @param {array} classes
 * @returns {string} A string of classes
 */
 export function mergeClasses<ClassType = string | undefined | null>(
  ...classes: ClassType[]
): string {
  return classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        String(className).trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();
}
