/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store"; // Import RootState to access token

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),
        addProduct: builder.mutation({
            query: (data, { getState:any }) => {
                const token = (getState() as RootState).auth.token; // Get token from Redux
                console.log("Token before API request:", token);

                return {
                    url: "/products",
                    method: "POST",
                    body: data,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
        }),
        getCategory: builder.query({
            query: () => ({
                url: "/category",
                method: "GET",
            }),
        }),
        getSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetProductQuery,
    useAddProductMutation,
    useGetCategoryQuery,
    useGetSingleProductQuery,
    useGetSingleCategoryQuery,
} = productsApi;
