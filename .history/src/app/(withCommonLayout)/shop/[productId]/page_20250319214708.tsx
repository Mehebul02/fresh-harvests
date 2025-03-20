"use client";
import Container from "@/components/shared/Container";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useState } from "react";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);
//   const [quantity, setQuantity] = useState(1);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load product.</div>;

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-17">
    {/* product image  */}
    <ProductImage images={product?.data.images}/>
    {/* product details  */}
    <div className="flex flex-col  gap-4">
    <h1 className="text-3xl font-bold font-jost">{product?.data.name}</h1>
    <div className="flex justify-between items-center gap-5">
     {/* <ProductPrice product={product}/> */}
  
    <div className="flex items-center gap-1">
    <div className="text-base text-gray-400 flex items-center ">
     {
        Array?.from({length:5})?.map((_,index)=>{
         const filed = index+1 <= Math.floor(product?.data.rating);
         const halfFiled = index+1 > Math.floor(product?.rating) && index <Math.ceil(product?.rating)
         return <MdStar key={index} className={`${filed ? 'text-[#fa8900]': halfFiled ?'text-[#f7ca00]': 'text-gray-600'}`}/>
        })
     }
       </div>
       {/* <p>{`(${product?.rating?.toFixed(1)}) reviews`}</p> */}
    </div>
    </div>
    <p className="flex items-center gap-2 font-jost"><FaRegEye className="mr-1"/> 250+ <span className="mr-2">peoples are viewing this right now</span> </p>
   {/* <p className="flex items-center gap-2 font-jost"> You are saving <PriceFormat amount={product?.discountPercentage / 100}  className="text-base font-semibold text-green-500"/> upon purchase</p>    */}
   <div className="space-y-2">
     <p className="text-sm tracking-wider font-sans">{product?.data.description}</p>
     <p className="text-base mt-3">{product?.warrantyInformation}</p>
     <p>Brand: <span className="font-medium capitalize">{product?.data.brand}</span></p>
     <p>Category: <span className="font-medium capitalize">{product?.data.category}</span></p>
     <p>Tags: {product?.data.tags?.map((item:any,index:any)=>(
         <span className="gap-2 font-semibold capitalize" key={index}> {item} {index < product?.tags?.length -1 && ' , '}</span>
     ))}</p>
    
   </div>
   {/* <AddToCartButton product={product}  className='rounded-md uppercase font-medium'/> */}
   <div className="flex items-center max-w-full mx-auto">
     <button className='bg-[#f7f7f7] text-black p-3 uppercase pr-9 pl-9 border-[1px] border-sky-600 hover:border-sky-200 rounded-full
 text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'>
        Add to cart
     </button>
 </div>
  <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
  <img src={paymentImage} alt="payment" className="w-auto object-cover mx-auto"/>
  <p className="text-center text-md font-jost font-medium">Guaranteed safe & secure checkout</p>
  </div>

    </div>
    {/* product review */}
    {/* <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10">
   {
     product?.reviews?.map((item)=>(
         <div key={item?.reviewerName} className="bg-white/80 p-5 border-[1px]  border-black-300 rounded-md hover:border-black-300 hover:bg-white duration-200 flex flex-col gap-2">

             <p className=" text-base font-semibold">{item?.comment}</p>
             <div>
                 <p className=" text-base font-semibold">{item?.reviewerName}</p>
                 <p>{item?.reviewerEmail}</p>
             </div>
         </div>
     ))
   }
<div className="text-base text-gray-400 flex items-center ">
     {
        Array?.from({length:5})?.map((_,index)=>{
         const filed = index+1 <= Math.floor(product.rating);
         const halfFiled = index+1 > Math.floor(product?.rating) && index <Math.ceil(product?.rating)
         return <MdStar key={index} className={`${filed ? 'text-[#fa8900]': halfFiled ?'text-[#f7ca00]': 'text-gray-600'}`}/>
        })
     }
       </div>
       
    </div> */}

 </Container>
  );
};

export default ProductDetailsPage;
