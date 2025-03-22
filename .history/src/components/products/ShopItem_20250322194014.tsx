import { useGetProductQuery } from "@/redux/features/product/productApi";
import { SkeletonCard } from "../shared/CardSkeleton";
import ProductCard from "../shop/ProductCard";
import { IProduct } from "@/types";

const ShopItem = () => {
    const { data: productsData, isLoading } = useGetProductQuery({});
    // const { data: categories, isLoading: isLoadingCategories } = useGetCategoryQuery({});
  
    if (isLoading){
      return <SkeletonCard className='md:mt-56'/>
    };
    return (
        <div>
             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[2940px] mx-auto">
           {
            productsData?.data?.map((product:IProduct)=>(<ProductCard key={product.id} product={product}/>))
           }
           </div>
        </div>
    );
};

export default ShopsItem;