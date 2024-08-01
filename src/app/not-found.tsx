import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className=" grid place-content-center h-screen">
      <h1 className="mb-8  text-2xl font-semibold tracking-tighter">
        404 找不到
      </h1>
      <p> 此页面不存在 </p>
      <Link href={"/"}>返回首页</Link>
    </div>
  );
}
