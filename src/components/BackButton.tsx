"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 shadow"
    >
      Go Back
    </button>
  );
};

export default BackButton;
