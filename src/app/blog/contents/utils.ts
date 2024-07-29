import fs from "fs";

import path from "path";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filepath: fs.PathOrFileDescriptor) {
  let rawcontent = fs.readFileSync(filepath, "utf-8");
  return rawcontent;
}
