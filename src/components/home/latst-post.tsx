import { getBlogPosts } from "@/app/blog/contents/utils";
import React from "react";

const LatestPost = () => {
  let latestPost = getBlogPosts();
  return (
    <>
      <h1>最新发布</h1>
      {latestPost
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          <article key={post.slug}>{post.metadata.title}</article>;
        })}
    </>
  );
};

export default LatestPost;
