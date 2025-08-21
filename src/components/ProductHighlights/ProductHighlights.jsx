"use client";
import React, { useEffect, useState } from "react";

import DetailsButton from "./DetailsButton";

const ProductHighlights = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/add"); // <-- calling your GET API
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
  const onSaleProducts = products.filter((product) => product.onSale === true);
  return (
    <section className="py-16  px-3 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {onSaleProducts.map((product) => (
          <div
            key={product._id}
            className="relative bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
          >
            {/* On Sale Badge */}
            {product.onSale && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                On Sale
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{product.shortDesc}</p>
            <p className="text-gray-900 font-bold mb-4">${product.price}</p>
            <div className="px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition text-center">
              <DetailsButton productId={product._id}></DetailsButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
