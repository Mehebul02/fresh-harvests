'use client'
import { SkeletonCard } from '@/components/shared/CardSkeleton';
import Container from '@/components/shared/Container';
import ProductCard from '@/components/shop/ProductCard';
import ShopBanner from '@/components/shop/ShopBanner';
import { useGetProductQuery } from '@/redux/features/product/productApi';
import { IProduct } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | Fresh Harvests ',
  description: 'Blog page',
};
const ShopPage = () => {
   
    return (
        <>
        
      
           <ShopBanner/>
        <Container>
            <h1 className='mt-8 text-3xl text-[#FF6A1A] font-bold'>Feature Products</h1>
         <
        </Container>
        </>
    );
};

export default ShopPage;