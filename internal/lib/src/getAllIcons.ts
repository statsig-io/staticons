import { globSync } from "glob";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getIconNode } from "./getIconNode";
import type { INode } from "svgson";
import { toPascalCase } from "./toPascalCase";
import { sanitizeIconName } from "./sanitizeIconName";

export type Icon = {
  name: string;
  alias: string;
  path: string;
  category: string;
  tags: string[];
  version: string;
  unicode: string;
  svg: string;
  iconNode: INode;
};

export function getAllIcons(iconsDir: string): Icon[] {
  const matches = globSync(path.join(iconsDir, "*.svg"));
  return matches.sort().reduce((acc, iconPath) => {
    const { data, content } = parseMatter(iconPath);
    const name = path.basename(iconPath, ".svg");
    const svg = fs.readFileSync(iconPath, "utf-8");
    const iconNode = getIconNode(iconPath);
    acc.push({
      name,
      alias: toPascalCase(sanitizeIconName(name)),
      path: iconPath,
      category: (data.category ?? "") as string,
      tags: (data.tags ?? []) as string[],
      version: (data.version ?? "") as string,
      unicode: (data.unicode ?? "") as string,
      svg: svg,
      iconNode: iconNode,
    });
    return acc;
  }, [] as Icon[]);
}

export function parseMatter(icon: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const { data, content } = matter.read(icon, { delimiters: ["<!--", "-->"] });

  return { data, content };
}
