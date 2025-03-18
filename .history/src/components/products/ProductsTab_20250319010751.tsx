'use client';
import { useGetCategoryQuery, useGetProductQuery } from "@/redux/features/product/productApi";
import { ICategory, IProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const { data: productsData, isLoading } = useGetProductQuery({});
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});
  
  if (isLoading || isLoadingCategories) return <p>Loading...</p>;

  const products: IProduct[] = productsData?.data || []; 
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.categoryId === activeTab);

  return (
    <div className=""> {/* Removed px-4 */}
    {/* Tab Buttons */}
    <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
      <button
        onClick={() => setActiveTab("All")}
        className={`px-6 py-2 rounded-lg text-gray-600 font-medium transition-all duration-300 ${
          activeTab === "All" ? "bg-green-600 text-white shadow-md" : "hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {categories?.data?.map((category: ICategory) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`cursor-pointer px-6 py-2 rounded-lg text-gray-600 font-medium transition-all duration-300 wi ${
            activeTab === category.id
              ? "bg-green-600 text-white shadow-md cursor-pointer"
              : "hover:bg-gray-200"
          }`}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  
    {/* Product List */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[2940px] mx-auto"> {/* Adjusted gap to gap-4 */}
      {filteredProducts.length > 0 ? (
        filteredProducts.slice(0, 8)?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="flex justify-center mb-4">
              {product?.images?.length > 0 && (
                <Image
                  src={product.images[0]}
                  alt={product.productName}
                  width={120}
                  height={120}
                  className="object-cover rounded-lg"
                />
              )}
            </div>
  
            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 mt-2">{product.productName}</h3>
  
            {/* Price */}
            <p className="text-gray-600 text-sm">${product.price}/kg</p>
  
            {/* Add to Cart Button */}
            <button className="mt-3 w-full py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-[#FF6A1A] hover:text-white cursor-pointer transition">
              Add to cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  </div>
  
  );
};

export default ProductsTab;
