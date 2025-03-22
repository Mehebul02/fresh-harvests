
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
        getSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET",

            })
        })
       


    }),
})


export const { useGetProductQuery, useGetCategoryQuery, useGetSingleProductQuery,useGetSingleCategoryQuery } = productsApi
