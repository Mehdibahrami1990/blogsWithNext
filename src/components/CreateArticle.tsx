"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const CreateArticle = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/articles", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title,
        description,
      }),
    });
    if (res.ok) {
      router.push("/blogs");
      router.refresh();
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <div className="bg-slate-200 py-24 flex flex-col px-8 gap-2 m-3">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        title:
      </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
      />
      <label className="block mb-2 text-sm font-medium text-gray-900">
        description:
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your description here..."
      ></textarea>
      <button
        className="text-white cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
        onClick={handleCreateArticle}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateArticle;
