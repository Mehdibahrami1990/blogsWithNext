import React from "react";
import Container from "@/components/Container";
import Article from "@/components/Article";
import { PropsBlogs } from "@/types/Types";
import Link from "next/link";

const Blogs = async () => {
  const result = await fetch("http://localhost:3001/articles");
  const data = (await result.json()) as PropsBlogs[];
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        {data.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <Article {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
