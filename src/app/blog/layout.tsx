import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" bg-gray-100 dark:bg-black">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
}
