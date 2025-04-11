import { basename } from "path";
import { parseSync } from "svgson";
import type { INode } from "svgson";
import fs from "fs";

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string} filePath - Path to icon svg file
 * @returns {INode}
 */
export function getIconNode(filePath: string): INode {
  const name = basename(filePath, ".svg");
  const svg = fs.readFileSync(filePath, "utf-8");
  const contents = parseSync(svg);

  if (!(contents.children && contents.children.length)) {
    throw new Error(`${name}.svg has no children!`);
  }

  return contents;
}
