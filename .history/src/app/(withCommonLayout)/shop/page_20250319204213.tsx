
import { SkeletonCard } from '@/components/shared/CardSkeleton';
import ProductCard from '@/components/shop/ProductCard';
import ShopBanner from '@/components/shop/ShopBanner';
import { useGetCategoryQuery, useGetProductQuery } from '@/redux/features/product/productApi';
import { IProduct } from '@/types';
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
            productsData?.data?.map((product:IProduct)=>(<ProductCard key={product.id} product={product}/>))
           }
        </div>
    );
};

export default ShopPage;