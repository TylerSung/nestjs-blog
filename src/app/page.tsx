import LatestPost from "@/components/home/latst-post";
import React from "react";
import { MainNav } from "@/components/main-nav";
import Container from "@/components/Container";
import TopCategories from "@/components/home/Topcatogories";
import PopularPosts from "@/components/home/popularPosts";
const Page = () => {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        {/* center */}
        <div className="flex-[2] md:flex-[2] lg:flex-[2]">
          <LatestPost />
        </div>
        {/* right */}
        <div className="h-screen flex-[1] md:flex-[1] lg:flex-[1]">
          <div>
            <h1 className="font-bold mb-4">主要类别</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">热门文章</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Page;
