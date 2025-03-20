"use client";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useState } from "react";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load product.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="flex gap-2 mt-4">
            {product.images?.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                width={80}
                height={80}
                className="cursor-pointer border border-gray-300 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">${product.price} /kg</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1 border-r border-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 border-l border-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-[#FF6A1A] text-white py-3 rounded-md hover:bg-[#e55d12] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
