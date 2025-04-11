import fs from "fs";
import path from "path";
import { Icon } from "./getAllIcons";
import type { INode } from "svgson";

export function writeIconFile(
  icon: Icon,
  destDir: string,
  format: (alias: string, content: string, children: INode[]) => string
): void {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  const output = format(icon.alias, icon.svg, icon.iconNode.children);

  fs.writeFileSync(path.join(destDir, `${icon.name}.ts`), output, "utf-8");
}
