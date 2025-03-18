import React from 'react';
import Container from '../shared/Container';
import TitleSection from '../shared/TitleSection';
import ProductsTab from './ProductsTab';

const HomeProducts = () => {
    return (
        <Container>

            <TitleSection className="text-center" title='Our Products' subtitle='Our Fresh Products' description='We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.' />
      <ProductsTab/>
      
        </Container>
    );
};

export default HomeProducts;