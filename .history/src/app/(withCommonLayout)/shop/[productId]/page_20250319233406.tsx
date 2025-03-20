'use client'
import Container from "@/components/shared/Container";
import { useGetCategoryQuery, useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import { useParams } from "next/navigation";
import {  useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaCartPlus, FaHardHat, FaRegEye } from "react-icons/fa";
import Spinner from "@/components/shared/loading";
import CustomeButton from "@/components/shared/CustomeButton";

const ProductDetailsPage =  () => {
  const { productId,categoryId } =useParams();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  const { data: category, isLoading: isLoadingCategories } = useGetCategoryQuery(categoryId);
console.log("Category Id:",categoryId);
  const [quantity, setQuantity] = useState(1);

  if (isLoading || isLoadingCategories) {
    return <Spinner />;
  }

  // Get category name
//   const categoryName = categories?.data?.find(
//     (cat: any) => cat.id === product?.data?.category
//   )?.name || "Uncategorized";

  // Get related products and limit to 4
//   const relatedProducts = categories?.data
//     ?.filter((item: any) => item.category === product?.data?.category && item.id !== product?.data?.id)
//     ?.slice(0, 4);
const categoryName = category?.data?.find(
    (cat: any) => cat.id === product?.data?.category
  )?.name || "Uncategorized"; // Default to "Uncategorized" if not found
  
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
          {/* Category Name */}
          <p className="text-lg text-gray-600">{categoryName}</p>
  
          {/* Product Name */}
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
         <div className="flex items-center gap-4">
         <button className="flex justify-center items-center gap-2 cursor-pointer bg-[#F4F6F6] text-black p-3 uppercase rounded-md hover:bg-[#f57c00] hover:text-white duration-200">
            <MdFavorite/>
            <span>Save as favorite</span>

          </button>
         <button className="flex justify-center items-center gap-2 bg-[#fa8900] cursor-pointer text-white p-3 uppercase rounded-md hover:bg-[#f57c00] duration-200">
            <FaCartPlus/>
            <span>Add to cart</span>

          </button>
         </div>
        </div>
      </div>

  <div className="w-[50%] ">
    <CustomeButton className="bg-[#749B3F] border border-[#749B3F] text-center text-white" text="Description"/>
  <p className="mt-2 text-gray-600">{product?.data?.description}</p>
  </div>
      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Related Products in <span className="text-[#fa8900]">{category?.categoryName}</span></h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
          {relatedProducts?.length > 0 ? (
            relatedProducts.map((related: any) => (
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
            ))
          ) : (
            <p className="text-gray-500">No related products found.</p>
          )}
        </div> */}
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
