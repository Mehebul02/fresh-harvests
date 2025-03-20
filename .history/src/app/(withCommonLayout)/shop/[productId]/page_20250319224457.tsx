'use client'
import Container from "@/components/shared/Container";
import { useGetCategoryQuery, useGetSingleProductQuery } from "@/redux/features/product/productApi";

import Image from "next/image";
import { useParams } from "next/navigation";
import {  useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import Spinner from "@/components/shared/loading";

const ProductDetailsPage =  ({params}) => {
  const { productId,categoryId } =params();
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
