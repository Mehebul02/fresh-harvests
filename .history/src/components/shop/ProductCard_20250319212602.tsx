

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/shop/${pr}`}>
    <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] h-[350px] flex flex-col bg-white rounded-lg shadow-lg p-4 text-center border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex justify-center mb-4">
        {product?.images?.length > 0 && (
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={150}
            height={150}
            className="object-cover rounded-lg"
          />
        )}
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-1">{product.productName}</h3>

      {/* Price */}
      <p className="text-gray-600 text-sm">${product.price}/kg</p>

      {/* Add to Cart Button */}
      <button className="mt-auto w-full py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-[#FF6A1A] hover:text-white cursor-pointer transition">
        Add to cart
      </button>
    </div>
    </Link>
  );
};

export default ProductCard;
