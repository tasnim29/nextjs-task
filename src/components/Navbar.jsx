"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 ">
      <nav className="bg-black/80 backdrop-blur-lg shadow-lg rounded-full px-10 py-3 flex space-x-10 items-center w-full max-w-3xl">
        <Link href="/">
          <p className="text-white font-semibold hover:text-cyan-500 transition">
            Home
          </p>
        </Link>
        <Link href="/products">
          <p className="text-white font-semibold hover:text-cyan-500 transition">
            Products
          </p>
        </Link>
        <Link href="/login">
          <p className="text-white font-semibold hover:text-cyan-500 transition">
            Login
          </p>
        </Link>
        <Link href="/dashboard/add-product">
          <p className="text-white font-semibold hover:text-cyan-500 transition">
            Add Product
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
