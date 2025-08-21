"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // for hamburger icon

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <nav className="bg-black/80 backdrop-blur-lg shadow-lg rounded-full px-6 py-3 flex items-center justify-between w-full max-w-3xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <p className="text-white font-bold text-lg cursor-pointer">
            Sports Gear
          </p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <p
              className={`font-semibold hover:text-cyan-500 transition cursor-pointer ${
                pathname === "/" ? "text-cyan-500" : "text-white"
              }`}
            >
              Home
            </p>
          </Link>

          <Link href="/products">
            <p
              className={`font-semibold hover:text-cyan-500 transition cursor-pointer ${
                pathname === "/products" ? "text-cyan-500" : "text-white"
              }`}
            >
              Products
            </p>
          </Link>

          <Link href="/dashboard/add-product">
            <p
              className={`font-semibold hover:text-cyan-500 transition cursor-pointer ${
                pathname === "/dashboard/add-product"
                  ? "text-cyan-500"
                  : "text-white"
              }`}
            >
              Add Product
            </p>
          </Link>
        </div>

        {/* Auth button (desktop) */}
        <div className="hidden md:block">
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="text-white font-semibold hover:text-cyan-500 transition cursor-pointer border border-cyan-500 rounded-full px-6 py-1"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <p
                className={`font-semibold hover:text-cyan-500 transition cursor-pointer border border-cyan-500 rounded-full px-6 py-1 ${
                  pathname === "/login" ? "text-cyan-500" : "text-white"
                }`}
              >
                Login
              </p>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black/90 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center space-y-4 py-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`font-semibold hover:text-cyan-500 transition ${
              pathname === "/" ? "text-cyan-500" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className={`font-semibold hover:text-cyan-500 transition ${
              pathname === "/products" ? "text-cyan-500" : "text-white"
            }`}
          >
            Products
          </Link>
          <Link
            href="/dashboard/add-product"
            onClick={() => setMenuOpen(false)}
            className={`font-semibold hover:text-cyan-500 transition ${
              pathname === "/dashboard/add-product"
                ? "text-cyan-500"
                : "text-white"
            }`}
          >
            Add Product
          </Link>
          {status === "authenticated" ? (
            <button
              onClick={() => {
                signOut();
                setMenuOpen(false);
              }}
              className="text-white font-semibold hover:text-cyan-500 transition border border-cyan-500 rounded-full px-6 py-1"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className={`font-semibold hover:text-cyan-500 transition border border-cyan-500 rounded-full px-6 py-1 ${
                pathname === "/login" ? "text-cyan-500" : "text-white"
              }`}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
