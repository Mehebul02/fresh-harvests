/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Metadata } from 'next';
// import React from 'react';
// export const metadata: Metadata = {
//     title: 'About | Fresh Harvests ',
//     description: 'About page',
//   }
// const AboutPage = () => {
//     return (
//         <div className='flex items-center justify-center h-screen'>
//         <h1 className='text-6xl font-bold'>Coming Soon</h1>
//     </div>
//     );
// };

// export default AboutPage;

'use client'

import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "@/redux/features/cart/cartSlice";
import { IProduct } from "@/types";
import Image from "next/image";

const ProductList = ({ products }: { products: IProduct[] }) => {
    console.log("fsdgfsdf",products);
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: any) => state.cart); // Accessing favorites from the store

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, quantity: 1 })); // Add product to cart with quantity 1
  };

  const handleAddToFavorites = (product: IProduct) => {
    dispatch(addToFavorites(product)); // Add product to favorites
  };

  const handleRemoveFromFavorites = (productId: string) => {
    dispatch(removeFromFavorites(productId)); // Remove product from favorites
  };

  return (
    <div className="product-list">
      {products?.map((product) => (
        <div key={product.id} className="product-card">
          <Image src={product.images} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          {favorites.find((item: IProduct) => item.id === product.id) ? (
            <button onClick={() => handleRemoveFromFavorites(product.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => handleAddToFavorites(product)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
