"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProductPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const product = {
      name: form.name.value,
      shortDesc: form.shortDesc.value,
      longDesc: form.longDesc.value,
      price: parseFloat(form.price.value),
      image: form.image.value,
      category: form.category.value,
      brand: form.brand.value,
      stock: parseInt(form.stock.value),
      features: form.features.value.split(",").map((f) => f.trim()),
      onSale: form.onSale.checked,
    };

    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        toast.success("Product added successfully");
        form.reset();
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        {/* Name & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter product name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2 font-medium text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.01"
              placeholder="Enter price"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Short & Long Description */}
        <div className="flex flex-col">
          <label htmlFor="shortDesc" className="mb-2 font-medium text-gray-700">
            Short Description
          </label>
          <input
            type="text"
            name="shortDesc"
            id="shortDesc"
            placeholder="Enter short description"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="longDesc" className="mb-2 font-medium text-gray-700">
            Long Description
          </label>
          <textarea
            name="longDesc"
            id="longDesc"
            placeholder="Enter detailed description"
            rows={4}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Image & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="image" className="mb-2 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Enter image URL"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="mb-2 font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter category"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Brand & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="brand" className="mb-2 font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Enter brand name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="stock" className="mb-2 font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              placeholder="Enter available stock"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Features & On Sale */}
        <div className="flex flex-col">
          <label htmlFor="features" className="mb-2 font-medium text-gray-700">
            Features (comma separated)
          </label>
          <input
            type="text"
            name="features"
            id="features"
            placeholder="Feature1, Feature2, Feature3"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="onSale"
            id="onSale"
            className="h-5 w-5 text-cyan-500 rounded focus:ring-2 focus:ring-cyan-400"
          />
          <label htmlFor="onSale" className="font-medium text-gray-700">
            On Sale
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
