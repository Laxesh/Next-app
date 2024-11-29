"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-4 bg-slate-800 text-white py-4 align-center w-full">
      <div className="links align-center p-2">
        <ul className="flex gap-6">
          <Link href="/" className={`link ${pathname === "/" ? "text-red-400  " : ""}`}>
            <li>Home</li>
          </Link>
          <Link href="/about" className={`link ${pathname === "/about" ? "text-red-400" : ""}`}>
            <li>About</li>
          </Link>
          <Link href="/contact" className={`link ${pathname === "/contact" ? "text-red-400" : ""}`}>
            <li>Contact</li>
          </Link>
          <Link href="/dashboard" className={`link ${pathname === "/dashboard" ? "text-red-400" : ""}`}>
            <li>Dashboard</li>
          </Link>
          <Link href="/blog" className={`link ${pathname === "/blog" ? "text-red-400" : ""}`}>
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className=" bg-black shadow shadow-black p-2">
          <Link href="/login"> Log in</Link>
        </button>
        <button className=" bg-black shadow shadow-black p-2">
          <Link href="/signup">Signup</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
