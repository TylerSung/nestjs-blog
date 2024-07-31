import { getBlogPosts } from "../../utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";

const page = ({ params }: { params: { category: string; slug: string } }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return <Header>
<Container>
  
</Container>
  </Header>;
};

export default page;
