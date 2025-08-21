"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/add"); // calling  GET API
        const data = await res.json();

        if (data.success) {
          setProducts(data.data);
        } else {
          console.error("Failed to fetch products", data.error);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-32 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:scale-105 flex flex-col"
          >
            {/* Sale Badge */}
            {product.onSale && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                SALE
              </span>
            )}

            {/* Floating Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 line-clamp-2 mt-2">
                  {product.shortDesc}
                </p>
                <p className="text-lg font-extrabold text-cyan-600 mt-3">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Button */}
              <div className="mt-4">
                <Link
                  href={`/products/${product._id}`}
                  className="w-full  py-2 px-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
