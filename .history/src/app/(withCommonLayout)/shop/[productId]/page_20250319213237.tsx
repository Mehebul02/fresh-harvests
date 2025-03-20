"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product data (Static for now, replace with API call)
  useEffect(() => {
    // Simulating API Call
    const fetchProduct = async () => {
      const mockProduct = {
        id: productId,
        name: "Fresh Organic Apples",
        price: 4.99,
        description:
          "High-quality organic apples, freshly picked from the farm.",
        images: [
          "https://via.placeholder.com/300", // Replace with real images
          "https://via.placeholder.com/300",
        ],
      };
      setProduct(mockProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="flex flex-col items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
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

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-4 border rounded-lg shadow">
              <Image
                src="https://via.placeholder.com/150"
                alt="Related Product"
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-center mt-2">Product Name</p>
              <p className="text-center text-green-600 font-semibold">$3.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
