// types/product.ts
export interface IProduct {
    id: string; 
    productName: string; 
    description: string; 
    price: number; 
    stock: number; 
    images: string[]; 
    categoryId: string; 
    isDeleted: boolean; // Whether the product is deleted or not
    createdAt: string; // Date when the product was created
    updatedAt: string; // Date when the product was last updated
  }
  