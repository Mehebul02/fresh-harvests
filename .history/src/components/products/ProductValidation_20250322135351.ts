export const productSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters."),
  description: z.string().min(10, "Description should be at least 10 characters."),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid price."),
  stock: z.number().int().min(1, "Stock must be at least 1."),
  images: z.array(z.string().url()).min(1, "At least one image URL is required."),
  categoryId: z.string().min(1, "Category is required."),
});