import { PropsBlogs } from "@/types/Types";
import React from "react";

const Article = ({ title, description }: PropsBlogs) => {
  return (
    <div className="shadow p-4">
      <h2 className="bg-indigo-600 p-1 mb-5 text-amber-50">{title} : </h2>
      <p>{description}</p>
    </div>
  );
};

export default Article;
