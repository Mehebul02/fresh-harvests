import { useGetProductQuery } from "@/redux/features/product/productApi";
import { SkeletonCard } from "../shared/CardSkeleton";

const ShopPage = () => {
    const { data: productsData, isLoading } = useGetProductQuery({});
    // const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});
  
    if (isLoading){
      return <SkeletonCard className='md:mt-56'/>
    };
    return (
        <div>
            <h1>Shop page</h1>
        </div>
    );
};

export default ShopPage;