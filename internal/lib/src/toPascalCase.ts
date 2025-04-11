import { toCamelCase } from "./toCamelCase";

export function toPascalCase(string: string): string {
  const camelCase = toCamelCase(string);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}
