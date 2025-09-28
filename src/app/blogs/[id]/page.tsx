import Container from "@/components/Container";
import { PropsBlogs } from "@/types/Types";
import React from "react";

interface PropsArticle {
  params: Promise<{ id: string }>;
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  searchParams: Promise<{}>;
}

const Article = async (props: PropsArticle) => {
  const { id } = await props.params;

  const result = await fetch(`http://localhost:3001/articles/${id}`);
  const data = (await result.json()) as PropsBlogs;

  return (
    <Container>
      <h2 className="text-2xl font-bold my-4">{data.title}</h2>
      <p>{data.description}</p>
    </Container>
  );
};

export default Article;
