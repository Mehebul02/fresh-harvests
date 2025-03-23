/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useAddProductMutation, useGetCategoryQuery } from "@/redux/features/product/productApi";
import { productSchema } from "@/components/products/ProductValidation";
import { toast } from "sonner"; 
import Image from "next/image";

type ProductFormData = z.infer<typeof productSchema>;

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
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

  const [imageFiles, setImageFiles] = useState<File[]>([]); 
  const [addProduct, { isLoading }] = useAddProductMutation(); 

  const { data: categoryOptions, error } = useGetCategoryQuery(undefined); 

  const [addProduct, { isLoading }] = useAddProductMutation(); 

  const onSubmit = async (data: ProductFormData) => {
      try {
          const formData = new FormData();
          formData.append("productName", data.productName);
          formData.append("description", data.description);
          formData.append("price", data.price);
          formData.append("stock", data.stock.toString());
          formData.append("categoryId", data.categoryId);
  
          // Token ensure করা
          const token = localStorage.getItem("token"); 
          if (!token) {
              toast.error("Authentication failed! Please log in.");
              return;
          }
  
          const response = await addProduct({
              body: formData,
              headers: {
                  Authorization: `Bearer ${token}`, // ✅ Correctly sending the token
              },
          }).unwrap();
  
          console.log("Product Added Successfully:", response);
          toast.success("Product added successfully!");
          reset();
          setImageFiles([]);
  
      } catch (error: any) {
          console.error("Error adding product:", error);
          toast.error(error?.data?.message || "An unexpected error occurred!");
      }
  };
  

  // Handle file input change
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageFiles((prevFiles) => [...prevFiles, ...files]); 
      setValue("images", files.map((file) => URL.createObjectURL(file))); 
    }
  };

  
  if (error) {
    return <p>Error fetching categories!</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        {/* Product Name */}
        <div className="mb-4">
          <Label className="mb-2" htmlFor="productName">Product Name</Label>
          <Input id="productName" {...register("productName")} placeholder="Enter product name" />
          {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <Label className="mb-2" htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} placeholder="Enter product description" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <Label className="mb-2" htmlFor="price">Price ($)</Label>
          <Input id="price" {...register("price")} placeholder="Enter product price" />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Stock */}
        <div className="mb-4">
          <Label className="mb-2" htmlFor="stock">Stock Quantity</Label>
          <Input id="stock" type="number" {...register("stock", { valueAsNumber: true })} />
          {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
        </div>

        {/* Images */}
        <div className="mb-4">
          <Label className="mb-2">Product Images</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <div className="mt-2">
            {imageFiles.length > 0 && (
              <div className="flex flex-wrap space-x-4">
                {imageFiles.map((file, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt="Product"
                      className="w-16 h-16 object-cover rounded" width={100} height={100}
                    />
                    <span className="text-sm">{file.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
        </div>

        {/* Category */}
        <div className="mb-4">
          <Label className="mb-2">Category</Label>
          <Select onValueChange={(value) => setValue("categoryId", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions?.data?.map((category: any) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId.message}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4 cursor-pointer bg-[#749B3F] hover:bg-[#FF6A1A]" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
