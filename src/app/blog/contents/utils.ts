import fs from "fs";

import path from "path";

import matter from "gray-matter";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
function readMDXFile(filepath: fs.PathOrFileDescriptor) {
  let rawcontent = fs.readFileSync(filepath, "utf-8");

  return matter(rawcontent);
}

function getMDXdata(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      content,
      slug,
    };
  });
}

export function getBlogPosts() {
  return getMDXdata(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate += `${yearsAgo}年前`;
  } else if (monthsAgo > 0) {
    formattedDate += `${monthsAgo}个月前`;
  } else if (daysAgo > 0) {
    formattedDate += `${daysAgo}天前`;
  } else {
    formattedDate += "今天";
  }

  let funDate = targetDate.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (!includeRelative) {
    return funDate;
  }
  return `${funDate} ${formattedDate}`;
}
