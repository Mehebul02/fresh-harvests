import { useGetProductQuery } from "@/redux/features/product/productApi";

const RelateProduct = () => {
     const { data: productsData, isLoading } = useGetProductQuery({});
    return (
        <Conta>
            
        </Conta>
    );
};

export default RelateProduct;