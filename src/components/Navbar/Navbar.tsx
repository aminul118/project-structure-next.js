import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center h-16 bg-slate-700 text-white">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
