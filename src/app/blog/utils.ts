// 导入必要的模块
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ======= 获取MDX文件 =======
/**
 * 获取指定目录中的所有 MDX 文件
 * 作用: 读取目录内容并过滤出 .mdx 文件
 */
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// ======= 读取和解析MDX文件 =======
/**
 * 读取并解析 MDX 文件内容
 * 作用: 同步读取文件内容并使用 gray-matter 解析,分离元数据和正文
 */
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

// ======= 获取MDX数据 =======
/**
 * 获取指定目录中所有 MDX 文件的数据
 * 作用: 处理目录中的每个MDX文件,返回包含元数据、slug和内容的对象数组
 */
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return { metadata, slug, content };
  });
}

// ======= 获取博客文章 =======
/**
 * 获取博客文章数据
 * 作用: 返回博客文章目录中的MDX数据
 */
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "app", "blog", "contents"));
}

// ======= 获取服务条款 =======
/**
 * 获取服务条款数据
 * 作用: 返回服务条款目录中的MDX数据
 */
export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}

// ======= 获取隐私政策 =======
/**
 * 获取隐私政策数据
 * 作用: 返回隐私政策目录中的MDX数据
 */
export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

// ======= 格式化日期 =======
/**
 * 格式化日期，可选择包含相对时间描述
 * 作用: 将日期格式化为中文格式,并可选添加相对时间描述
 */
export function formatDate(date: string, includeRelative = true) {
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
    formattedDate = `${yearsAgo}年前`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}个月前`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}日前`;
  } else {
    formattedDate = "今日";
  }

  let fullDate = targetDate.toLocaleString("zh-cn", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return !includeRelative ? fullDate : `${fullDate} (${formattedDate})`;
}
