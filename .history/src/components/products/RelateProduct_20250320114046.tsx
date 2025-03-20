import { useGetProductQuery } from "@/redux/features/product/productApi";
import Container from "../shared/Container";

const RelateProduct = () => {
     const { data: productsData, isLoading } = useGetProductQuery({});
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">

            </div>
            
        </Container>
    );
};

export default RelateProduct;