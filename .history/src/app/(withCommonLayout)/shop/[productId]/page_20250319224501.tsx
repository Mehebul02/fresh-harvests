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
    
    </Container>
  );
};

export default ProductDetailsPage;
