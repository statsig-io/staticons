import fs from "fs";

import { Icon } from "./getAllIcons";

export async function writeIconsExportFile(icons: Icon[], destPath: string) {
  icons.forEach((icon) => {
    fs.appendFileSync(
      destPath,
      `export { default as ${icon.alias} } from './${icon.name}';\n`,
      "utf-8"
    );
  });

  fs.appendFileSync(destPath, "\n", "utf-8");

  console.log(`Successfully generated ${destPath} file`);
}
