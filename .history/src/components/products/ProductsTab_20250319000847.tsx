import React from 'react';

const ProductsTab = () => {
    return (
        <div>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default ProductsTab;