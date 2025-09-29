import BackButton from "@/components/BackButton";
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
      <div className="max-w-4xl mx-auto p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900">{data.title}</h1>

        {/* Description */}
        <div className="bg-white shadow p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <BackButton />
        </div>
      </div>
    </Container>
  );
};

export default Article;
