"use client";
import Container from "@/components/shared/Container";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load product.</div>;

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Product Image */}
      <div className="flex flex-col items-center">
        <Image
          src={product?.data?.image}
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
        <h1 className="text-3xl font-bold font-jost">{product?.data?.productName}</h1>
        <div className="flex justify-between items-center gap-5">
          {/* Product Rating */}
          <div className="flex items-center gap-1">
            <div className="text-base text-gray-400 flex items-center">
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
        </div>

        <p className="flex items-center gap-2 font-jost">
          <FaRegEye className="mr-1" /> 250+ <span className="mr-2">people are viewing this right now</span>
        </p>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-sm tracking-wider font-sans">{product?.data?.description}</p>
          <p>Brand: <span className="font-medium capitalize">{product?.data?.brand}</span></p>
          <p>Category: <span className="font-medium capitalize">{product?.data?.category}</span></p>
          <p>
            Tags:{" "}
            {product?.data?.tags?.map((item: string, index: number) => (
              <span className="gap-2 font-semibold capitalize" key={index}>
                {item} {index < product?.data?.tags?.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex items-center max-w-full mx-auto">
          <button className="bg-[#f7f7f7] text-black p-3 uppercase pr-9 pl-9 border-[1px] border-sky-600 hover:border-sky-200 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]">
            Add to cart
          </button>
        </div>

        {/* Secure Checkout */}
        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <p className="text-center text-md font-jost font-medium">Guaranteed safe & secure checkout</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
