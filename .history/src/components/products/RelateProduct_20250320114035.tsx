import { useGetProductQuery } from "@/redux/features/product/productApi";
import Container from "../shared/Container";

const RelateProduct = () => {
     const { data: productsData, isLoading } = useGetProductQuery({});
    return (
        <Container>
            <div className="gr">

            </div>
            
        </Container>
    );
};

export default RelateProduct;