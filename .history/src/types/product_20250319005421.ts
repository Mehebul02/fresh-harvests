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

  export interface Category {
    id: string; 
    categoryName: string; 
    createdAt: string; 
    updatedAt: string; // Date when the category was last updated
  }
  