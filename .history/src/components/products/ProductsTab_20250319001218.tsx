import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Container from '../shared/Container';
const ProductsTab = () => {
    const onChange = (key: string) => {
        console.log(key);
      };
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'All',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Tab 2',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ];
    return (
        <div className='flex justify-center'>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default ProductsTab;