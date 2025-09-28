import React from "react";
import Container from "@/components/Container";
import Article from "@/components/Article";
import { PropsBlogs } from "@/types/Types";
import Link from "next/link";

const Blogs = async () => {
  const result = await fetch("http://localhost:3001/articles");
  const data = (await result.json()) as PropsBlogs[];
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/blogs/${item.id}`}>
            <Article {...item} key={item.id} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
