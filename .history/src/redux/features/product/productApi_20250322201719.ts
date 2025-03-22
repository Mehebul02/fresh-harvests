import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create baseApi with all necessary configurations
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1', // Use your actual API base URL here
    credentials: 'include', // Optional, if needed for cookies/session handling
    prepareHeaders: (headers) => {
      // Optionally set headers here (like Authorization)
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Get all products
    getProduct: builder.query({
      query: () => ({
        url: '/products', // Endpoint to fetch products
        method: 'GET',
      }),
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data, // Data to add a product
      }),
    }),

    // Get a single product by ID
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),

    // Get all categories
    getCategory: builder.query({
      query: () => ({
        url: '/category', // Endpoint to fetch categories
        method: 'GET',
      }),
    }),

    // Get a single category by ID
    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

// Export generated hooks to use in components
export const {
  useGetProductQuery,
  useAddProductMutation,
  useGetCategoryQuery,
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
} = baseApi;

