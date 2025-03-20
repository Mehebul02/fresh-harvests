
const ProductDetailsPage  = async({params}) => {
    const { productId } = await params;
    
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetailsPage ;