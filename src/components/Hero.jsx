import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-gray-100 h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-xl">
          Discover amazing products and manage your collection easily.
        </p>
        <div className="flex space-x-4">
          <Link
            className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
            href="/products"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
