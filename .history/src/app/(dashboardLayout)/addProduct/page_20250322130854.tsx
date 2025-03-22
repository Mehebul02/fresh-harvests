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

const productSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters."),
  description: z.string().min(10, "Description should be at least 10 characters."),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid price."),
  stock: z.number().int().min(1, "Stock must be at least 1."),
  images: z.array(z.string().url()).min(1, "At least one image URL is required."),
  categoryId: z.string().min(1, "Category is required."),
});

type ProductFormData = z.infer<typeof productSchema>;

export default function AddProduct() {
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
    
  );
}



import React from 'react';

const AddProductPage = () => {
    return (
        <div>
            
        </div>
    );
};

export default AddProductPage;