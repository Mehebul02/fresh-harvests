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
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is set properly
                },
            }),
        }),  updateProduct: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: data,
                headers: (headers) => {
                    const token = localStorage.getItem("token");
                    if (token) {
                        headers.set("Authorization", `Bearer ${token}`);
                    }
                    return headers;
                },
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


export const { useGetProductQuery,useAddProductMutation,useUpdateProductMutation, useGetCategoryQuery, useGetSingleProductQuery,useGetSingleCategoryQuery } = productsApi
