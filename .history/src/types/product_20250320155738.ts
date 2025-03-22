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


  export interface ICartItem {
    id: string; 
  productName: string;
  price: number; 
  quantity: number;
  image: string; // Assuming image is a string (URL)
  description: string;
  stock: number;
  images: string[]; // Assuming images is an array of strings (URLs)
  categoryId: string;
  }