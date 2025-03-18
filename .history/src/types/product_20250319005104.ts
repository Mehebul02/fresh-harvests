// types/product.ts
export interface IProduct {
    id: string; // Unique product ID
    productName: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    stock: number; // Stock quantity available
    images: string[]; // Array of image URLs
    categoryId: string; // ID of the category the product belongs to
    isDeleted: boolean; // Whether the product is deleted or not
    createdAt: string; // Date when the product was created
    updatedAt: string; // Date when the product was last updated
  }
  