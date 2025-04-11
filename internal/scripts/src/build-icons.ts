#!/usr/bin/env node

import fs from "fs";
import path from "path";
import {
  getAllIcons,
  writeIconFile,
  writeIconsExportFile,
} from "@staticons/lib";
import getCLIArgs from "minimist";

const PACKAGE_DIR = process.cwd();
const ICONS_DIR = path.resolve(PACKAGE_DIR, "../../icons");
const OUTPUT_DIR = path.resolve(PACKAGE_DIR, "src/icons");

const cliArguments = getCLIArgs(process.argv.slice(2));

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const { format: formatArg } = cliArguments;

async function buildIcons() {
  if (formatArg == null) {
    throw new Error("No `--format` argument given.");
  }
  const icons = getAllIcons(ICONS_DIR);

  const { default: format } = await import(
    path.resolve(process.cwd(), formatArg)
  );

  icons.forEach((icon) => writeIconFile(icon, OUTPUT_DIR, format));
  writeIconsExportFile(icons, path.join(OUTPUT_DIR, "index.ts"));
}
buildIcons();
