"use client";

import React from "react";
import productsData from "@/data/products.json";
import Link from "next/link";

const ProductPage = ({ params }) => {
  const { id } = params; // get id from URL
  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-gray-600">Product not found</p>
      </div>
    );

  return (
    <div className="min-h-screen py-32 px-4 max-w-5xl mx-auto">
      <Link
        href="/products"
        className="text-cyan-500 font-semibold hover:underline mb-6 inline-block"
      >
        &larr; Back to Products
      </Link>

      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-3">{product.longDesc}</p>

            <p className="text-lg font-semibold text-gray-700 mt-4">
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              <span className="font-bold">Brand:</span> {product.brand}
            </p>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              <span className="font-bold">Stock:</span> {product.stock}
            </p>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              <span className="font-bold">Rating:</span> {product.rating} ⭐
            </p>

            <p className="text-2xl font-extrabold text-cyan-600 mt-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Features */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 px-6 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition">
              Add to Cart
            </button>
            <button className="flex-1 py-3 px-6 border border-cyan-500 text-cyan-500 font-semibold rounded-xl hover:bg-cyan-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
