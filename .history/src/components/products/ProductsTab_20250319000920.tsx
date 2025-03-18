import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
const ProductsTab = () => {
    return (
        <div>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default ProductsTab;