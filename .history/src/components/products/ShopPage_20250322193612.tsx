
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