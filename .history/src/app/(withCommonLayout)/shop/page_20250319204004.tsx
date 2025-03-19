
import { SkeletonCard } from '@/components/shared/CardSkeleton';
import ShopBanner from '@/components/shop/ShopBanner';
import { useGetCategoryQuery, useGetProductQuery } from '@/redux/features/product/productApi';
import React from 'react';

const ShopPage = () => {
    const { data: productsData, isLoading } = useGetProductQuery({});
      const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});
    
      if (isLoading || isLoadingCategories){
        return <SkeletonCard/>
      };
    return (
        <div>
           <ShopBanner/>
           {
            productsData?.data?.map((product)=>())
           }
        </div>
    );
};

export default ShopPage;