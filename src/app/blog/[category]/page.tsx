import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "../../../components/Container";
import CardCategory from "../../../components/CardCategory";
import Header from "../../../components/Header";
// ======= 主页面组件 =======
/**
 * 博客分类页面组件
 * 作用: 展示特定分类下的所有博客文章
 */

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}
export default function Page({ params }: { params: { category: string } }) {
  // ======= 获取并过滤博客文章 =======
  /**
   * 获取指定分类的博客文章
   * 作用: 从所有博客文章中筛选出特定分类的文章
   */
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  // 如果没有找到文章,返回404页面
  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <h1 className=" title font-semibold text-2xl tracking-wide">
            {posts[0]?.metadata.category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {/* ======= 分类标题 ======= */}
          <div className="col-span-2 md:col-span-3">
            <h1 className="text-3xl font-bold mb-4">{params.category}</h1>
          </div>

          {/* ======= 文章列表 ======= */}
          {posts
            // 按发布日期排序
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            // 渲染每篇文章的卡片
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
