import { baseApi } from "../auth/authApi"

export const productsApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/products',
                method:'GET',
            }),
        }),
        getCategory:builder.query({
            query:()=>({
                url:'/category',
                method:'GET',
            }),
        }),
        getSingleProduct:builder.query({
            query:(id)=>({
                ur:`/products`
            })
        })
        
        
    }),
})


export const {useGetProductQuery,useGetCategoryQuery} = productsApi
