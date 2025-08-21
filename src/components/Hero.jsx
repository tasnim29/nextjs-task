import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/sports.webp')",
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-xl">
            Discover amazing products and manage your collection easily.
          </p>
          <div className="flex space-x-4 justify-center">
            <Link
              className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
              href="/products"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
