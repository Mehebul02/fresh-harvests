"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGetCategoryQuery } from "@/redux/features/product/productApi";

const productSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters."),
  description: z.string().min(10, "Description should be at least 10 characters."),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid price."),
  stock: z.number().int().min(1, "Stock must be at least 1."),
  images: z.array(z.string().url()).min(1, "At least one image URL is required."),
  categoryId: z.string().min(1, "Category is required."),
});

type ProductFormData = z.infer<typeof productSchema>;

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      description: "",
      price: "",
      stock: 1,
      images: [],
      categoryId: "",
    },
  });

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Fetch categories dynamically
  const { data: categoryData, isLoading, error } = useGetCategoryQuery(undefined);



  const onSubmit = (data: ProductFormData) => {
    console.log("Submitted Data:", data);
    // Add API call logic here
  };

  const handleImageAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    if (url) {
      setImageUrls([...imageUrls, url]);
      setValue("images", [...imageUrls, url]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        {/* Product Name */}
        <div className="mb-4">
          <Label htmlFor="productName">Product Name</Label>
          <Input id="productName" {...register("productName")} placeholder="Enter product name" />
          {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} placeholder="Enter product description" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <Label htmlFor="price">Price ($)</Label>
          <Input id="price" {...register("price")} placeholder="Enter product price" />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Stock */}
        <div className="mb-4">
          <Label htmlFor="stock">Stock Quantity</Label>
          <Input id="stock" type="number" {...register("stock", { valueAsNumber: true })} />
          {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
        </div>

        {/* Images */}
        <div className="mb-4">
          <Label>Product Images</Label>
          <Input type="url" placeholder="Enter image URL" onChange={handleImageAdd} />
          <div className="mt-2">
            {imageUrls.map((url, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Image src={url} alt="Product" width={64} height={64} className="object-cover rounded" />
                <span className="text-sm">{url}</span>
              </div>
            ))}
          </div>
          {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
        </div>

        {/* Category */}
        <div className="mb-4">
          <Label>Category</Label>
          {isLoading ? (
            <p>Loading categories...</p>
          ) : error ? (
            <p className="text-red-500">Failed to load categories.</p>
          ) : (
            <Select onValueChange={(value) => setValue("categoryId", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categoryData?.map((category: { _id: string; name: string }) => (
                  <SelectItem key={category._id} value={category._id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId.message}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
