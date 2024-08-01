import { getBlogPosts, formatDate } from "@/app/blog/utils";
import Link from "next/link";
import React from "react";
const LatestPost = () => {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1 className=" inline-block  font-heading  text-2xl font-bold ">
        最新发布
      </h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className=" text-wrap max-w-md my-10">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className=" font-bold py-2 leading-5 hover:text-blue-500 ">
                {post.metadata.title}
              </h3>
            </Link>
            <p className=" leading-8 py-5">{post.metadata.summary}</p>
            <p className=" text-sm   text-muted-foreground ">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </article>
        ))}
    </>
  );
};
export default LatestPost;
