import LatestPost from "@/components/home/latst-post";
import React from "react";
import { MainNav } from "@/components/main-nav";
const page = () => {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPost />
        </div>
      </main>
    </>
  );
};

export default page;
