import { useGetProductQuery } from "@/redux/features/product/productApi";
import Container from "../shared/Container";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";

const RelateProduct = () => {
     const { data: productsData,  } = useGetProductQuery({});
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-1">

                {
                    productsData?.data?.slice(0,4).map((product:IProduct)=>(
                        <Link href={`/shop/${product.id}`} key={product.id}>
                                    <div
                                      
                                      className="bg-white rounded-lg shadow-lg p-4 text-center border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
                                    >
                                      {/* Product Image */}
                                      <div className="flex justify-center mb-4">
                                        {product?.images?.length > 0 && (
                                          <Image
                                            src={product.images[0]}
                                            alt={product.productName}
                                            width={120}
                                            height={120}
                                            className="object-cover rounded-lg"
                                          />
                                        )}
                                      </div>
                        
                                      {/* Product Name */}
                                      <h3 className="text-lg font-semibold text-gray-800 mt-2">{product.productName}</h3>
                        
                                      {/* Price */}
                                      <p className="text-gray-600 text-sm">${product.price}/kg</p>
                        
                                      {/* Add to Cart Button */}
                                      <button className="mt-3 w-full py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-[#FF6A1A] hover:text-white cursor-pointer transition self-end">
                                        Add to cart
                                      </button>
                                    </div>
                                   </Link>
                    ))
                }

            </div>
            
        </Container>
    );
};

export default RelateProduct;