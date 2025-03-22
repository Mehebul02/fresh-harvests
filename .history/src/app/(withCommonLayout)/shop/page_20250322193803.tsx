
import Container from '@/components/shared/Container';

import ShopBanner from '@/components/shop/ShopBanner';

import { Metadata } from 'next';
import ShopPage from '@'
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
         <ShopPage/>
        </Container>
        </>
    );
};

export default ShopPage;