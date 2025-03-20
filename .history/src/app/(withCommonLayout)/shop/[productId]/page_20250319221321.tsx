"use client";
import Container from "@/components/shared/Container";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load product.</div>;

  return (
    <Container className="py-10 mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="flex flex-col items-center">
          <Image
            src={product?.data?.images[0]}
            alt={product?.data?.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="flex gap-2 mt-4">
            {product?.data?.images?.map((img: string, index: number) => (
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

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product?.data?.productName}</h1>
            
          <div className="flex items-center gap-5">
          
            <div className="flex items-center gap-1 text-gray-400">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.data?.rating);
                return (
                  <IoMdStar
                    key={index}
                    className={`${filled ? "text-[#fa8900]" : "text-gray-600"}`}
                  />
                );
              })}
            </div>
          </div>
          <p className="text-2xl font-semibold text-[#fa8900]">${product?.data?.price}/kg</p>
          <p className="mt-2 text-gray-600">{product?.data?.description}</p>
          <p className="flex items-center gap-2">
            <FaRegEye className="mr-1" /> 250+ people are viewing this right now
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <p className="font-medium">Quantity:</p>
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#fa8900] text-white p-3 uppercase rounded-md hover:bg-[#f57c00] duration-200">
            Add to cart
          </button>
        </div>
      </div>

      {/* Product Description & Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-600">{product?.data?.description}</p>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
          {product?.data?.relatedProducts?.map((related: any) => (
            <div key={related.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src={related.image}
                alt={related.name}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium mt-2">{related.name}</h3>
              <p className="text-sm text-gray-500">${related.price}</p>
              <button className="bg-[#fa8900] text-white px-3 py-1 rounded-md mt-2 hover:bg-[#f57c00]">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
