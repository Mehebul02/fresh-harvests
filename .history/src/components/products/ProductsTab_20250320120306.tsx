'use client';
import { useGetCategoryQuery, useGetProductQuery } from "@/redux/features/product/productApi";
import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { SkeletonCard } from "../shared/CardSkeleton";
import CustomeButton from "../shared/CustomeButton";
import Link from "next/link";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const { data: productsData, isLoading } = useGetProductQuery({});
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});

  if (isLoading || isLoadingCategories){
    return <SkeletonCard/>
  };

  const products: IProduct[] = productsData?.data || []; 
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.categoryId === activeTab);

  return (
    <div className="px-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center sm:flex-nowrap space-x-4 bg-gray-100 p-2 rounded-lg shadow-md max-w-[600px] mx-auto">
        <button
          onClick={() => setActiveTab("All")}
          className={`w-full sm:w-auto px-6 py-2 rounded-lg text-gray-600 font-medium transition-all duration-300 ${
            activeTab === "All" ? "bg-green-600 text-white shadow-md" : "hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories?.data?.map((category: ICategory) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`w-full sm:w-auto px-6 py-2 rounded-lg text-gray-600 font-medium transition-all duration-300  ${
              activeTab === category.id
                ? "bg-green-600 text-white shadow-md"
                : "hover:bg-gray-200"
            }`}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
  
      {/* Product List */}
 
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[2940px] mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 8)?.map((product) => (
          //  <Link href={`/shop/${product.id}`} key={product.id}>
         <div>
          
         </div>
          //  </Link>
          ))
        ) : (
          <p className="w-full mx-auto text-gray-500 text-center md:ml-96 mt-7">No products found in this category.</p>
        )}
      </div>
     
        <Link href='/shop'>
        <div  className="text-center">
        <CustomeButton className="text-center mt-10  mx-auto" text="See Al Products"/>
        </div>
        </Link>
    </div>
  );
};

export default ProductsTab;
