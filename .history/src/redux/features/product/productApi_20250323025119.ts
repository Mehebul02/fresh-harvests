import { baseApi } from "@/redux/api/baseApi"

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getProduct: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body:data

            }),
        }),
        
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",

            })
        }),
        getCategory: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET',
            }),
        }),
        getSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET",

            })
        })
       


    }),
})


export const { useGetProductQuery,useAddProductMutation, useGetCategoryQuery, useGetSingleProductQuery,useGetSingleCategoryQuery } = productsApi
