
import ShopBanner from '@/components/shop/ShopBanner';
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
           
        </div>
    );
};

export default ShopPage;