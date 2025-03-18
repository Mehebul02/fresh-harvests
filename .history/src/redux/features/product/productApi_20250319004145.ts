import { baseApi } from "../auth/authApi"

export const productsApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/products',
                method:'GET',
            }),
        }),
        getcategory:builder.query({
            query:()=>({
                url:'/products',
                method:'GET',
            }),
        }),
        
        
    }),
})


export const {useGetProductQuery,} = productsApi
