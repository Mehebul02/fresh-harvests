'use client'
import { SkeletonCard } from '@/components/shared/CardSkeleton';
import Container from '@/components/shared/Container';
import ProductCard from '@/components/shop/ProductCard';
import ShopBanner from '@/components/shop/ShopBanner';
import { useGetCategoryQuery, useGetProductQuery } from '@/redux/features/product/productApi';
import { IProduct } from '@/types';
import React from 'react';

const ShopPage = () => {
    const { data: productsData, isLoading } = useGetProductQuery({});
      const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});
    
      if (isLoading || isLoadingCategories){
        return <SkeletonCard className=''/>
      };
    return (
        <>
        
      
           <ShopBanner/>
        <Container>
           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[2940px] mx-auto">
           {
            productsData?.data?.map((product:IProduct)=>(<ProductCard key={product.id} product={product}/>))
           }
           </div>
        </Container>
        </>
    );
};

export default ShopPage;