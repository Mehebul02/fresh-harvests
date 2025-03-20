import { useGetProductQuery } from "@/redux/features/product/productApi";

const RelateProduct = () => {
     const { data: productsData, isLoading } = useGetProductQuery({});
    return (
        <div cl>
            
        </div>
    );
};

export default RelateProduct;