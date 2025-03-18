import { baseApi } from "../auth/authApi"

const productA =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/auth/login',
                method:'GET',
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
