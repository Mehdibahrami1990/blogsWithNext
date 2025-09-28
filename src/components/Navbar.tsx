import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow p-4">
      <Link href="/" className="mr-4">
        Home
      </Link>
      <Link href="/blogs">Blogs</Link>
    </div>
  );
};

export default Navbar;
