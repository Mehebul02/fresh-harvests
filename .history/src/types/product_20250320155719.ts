// types/product.ts
export interface IProduct {
    id: string; 
    productName: string; 
    description: string; 
    price: number; 
    stock: number; 
    images: string[]; 
    categoryId: string; 
    isDeleted: boolean; 
    createdAt: string; 
    updatedAt: string; 
  }

  export interface ICategory {
    id: string; 
    categoryName: string; 
    createdAt: string; 
    updatedAt: string;
  }
  

  export interface ICart {
    
    id: string;
    productName:string; 
    price: number;
    quantity: number;
    image: string[];
  }


  export 