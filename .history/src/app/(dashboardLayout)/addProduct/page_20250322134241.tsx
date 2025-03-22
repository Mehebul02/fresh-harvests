"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";

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
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch categories dynamically
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  const onSubmit = (data: ProductFormData) => {
    console.log("Submitted Data:", data);
    // Add API call logic here
  };

  const handleImageAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    if (url) {
      setImageUrls((prev) => [...prev, url]);
      setValue("images", [...imageUrls, url]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <Label>Product Name</Label>
        <Input {...register("productName")} placeholder="Enter product name" />
        {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}

        {/* Description */}
        <Label>Description</Label>
        <Textarea {...register("description")} placeholder="Enter product description" />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

        {/* Price */}
        <Label>Price ($)</Label>
        <Input {...register("price")} placeholder="Enter product price" />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        {/* Stock */}
        <Label>Stock Quantity</Label>
        <Input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}

        {/* Images */}
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

        {/* Category */}
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
              {categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId.message}</p>}

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProductPage;
