
import Container from "@/components/shared/Container";
import { useGetCategoryQuery, useGetSingleProductQuery } from "@/redux/features/product/productApi";

import Image from "next/image";
import { useParams } from "next/navigation";
import {  useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import Spinner from "@/components/shared/loading";
import ProductDetailsPage from "@/components/products/ProductDetails";

const ProductDe =async  ({params}) => {
  const { productId,categoryId } =await params();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
  const { data: category, isLoading: isLoadingCategories } = useGetCategoryQuery(categoryId);
console.log("Category Id:",categoryId);
  const [quantity, setQuantity] = useState(1);

  if (isLoading || isLoadingCategories) {
    return <Spinner />;
  }


  return (
    <Container className="py-10 mt-36">
     
  <ProductDetailsPage product={pro}/>
    
    
    </Container>
  );
};

export default ProductDe;
