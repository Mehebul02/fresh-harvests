import { baseApi } from "../auth/authApi"

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
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
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",

            })
        })
       


    }),
})


export const { useGetProductQuery, useGetCategoryQuery, useGetSingleProductQuery } = productsApi
