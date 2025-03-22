/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Container from "@/components/shared/Container";
import { useGetCategoryQuery, useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaCartPlus, FaRegEye } from "react-icons/fa";
import Spinner from "@/components/shared/loading";
import CustomeButton from "@/components/shared/CustomeButton";
import TitleSection from "@/components/shared/TitleSection";
import RelateProduct from "@/components/products/RelateProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { ICart } from "@/types";

const ProductDetailsPage = () => {
  const { productId, categoryId } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(productId);
  const { data: category, isLoading: isLoadingCategories } = useGetCategoryQuery(categoryId);
  const dispatch = useDispatch();
  console.log(dispatch);
  const [quantity, setQuantity] = useState(1);

  if (isLoading || isLoadingCategories) {
    return <Spinner />;
  }

  const categoryName = category?.data?.find((cat:ICart) => cat.id === product?.data?.category
  )?.name || "Uncategorized";

  const handleAddToCart = () => {
    const cartItem :IC = {
      id: product?.data?.id,
      name: product?.data?.productName,
      price: product?.data?.price,
      quantity,
      image: product?.data?.images[0],
    };
    console.log("Adding to Cart:", cartItem); 
    dispatch(addToCart(cartItem));
  };
  

  return (
    <Container className="py-10 mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col items-center">
          <Image
            src={product?.data?.images[0]}
            alt={product?.data?.name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray-600">{categoryName}</p>
          <h1 className="text-3xl font-bold">{product?.data?.productName}</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-gray-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoMdStar
                  key={index}
                  className={`$ {
                    index + 1 <= Math.floor(product?.data?.rating) ? "text-[#fa8900]" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-2xl font-semibold text-[#fa8900]">${product?.data?.price}/kg</p>
          <p className="mt-2 text-gray-600">{product?.data?.description}</p>
          <p className="flex items-center gap-2">
            <FaRegEye className="mr-1" /> 250+ people are viewing this right now
          </p>
          <div className="flex items-center gap-4">
            <p className="font-medium">Quantity:</p>
            <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="bg-gray-200 px-3 py-1 rounded">-</button>
            <span className="text-lg">{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)} className="bg-gray-200 px-3 py-1 rounded">+</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex justify-center items-center gap-2 cursor-pointer bg-[#F4F6F6] text-black p-3 uppercase rounded-md hover:bg-[#f57c00] hover:text-white duration-200">
              <MdFavorite/>
              <span>Save as favorite</span>
            </button>
            <button onClick={handleAddToCart} className="flex justify-center items-center gap-2 bg-[#fa8900] cursor-pointer text-white p-3 uppercase rounded-md hover:bg-[#f57c00] duration-200">
              <FaCartPlus/>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <CustomeButton className="bg-[#749B3F] border border-[#749B3F] text-center text-white" text="Description"/>
        <div className="bg-[#F4F6F6] p-4 rounded-md mt-4">
          <p className="mt-2 text-gray-600">{product?.data?.description}</p>
        </div>
      </div>
      <div className="mt-10">
        <TitleSection className="text-center" title="Our Products" subtitle="Related products" description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."/>
        <RelateProduct/>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
