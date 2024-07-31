// 导入 Button 组件，用于创建可点击的按钮
import { Button } from "../ui/button";

// 导入 Next.js 的 Link 组件，用于创建客户端导航链接
import Link from "next/link";

// 导入 Posts 数组，包含了博客文章的标题、链接和描述
import { Posts } from "@/lib/contents";

// 定义 TopCategories 组件
const TopCategories = () => {
  return (
    // 创建一个网格布局容器
    // grid-cols-[repeat(auto-fill,minmax(100px,1fr))] 使用自动填充，每列最小宽度100px，最大1fr
    // gap-2 设置网格项之间的间隙为2个单位
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {/* 使用 map 函数遍历 Posts 数组，为每个文章创建一个按钮 */}
      {Posts.map((post) => (
        <Button
          // 使用文章标题作为 key，确保每个按钮的唯一性
          key={post.title}
          // 设置按钮变体为 "secondary"
          variant={"secondary"}
          // 添加悬停效果：放大1.05倍，并设置过渡动画
          className="hover:scale-105 transition-all "
          // asChild 属性允许 Button 组件将其属性传递给其子元素
          asChild
        >
          {/* 使用 Next.js 的 Link 组件创建导航链接 */}
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
};

// 导出 TopCategories 组件，使其可以在其他文件中使用
export default TopCategories;
