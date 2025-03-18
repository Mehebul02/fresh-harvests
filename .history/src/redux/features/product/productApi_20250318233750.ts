import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/auth/login',
                method:'G',
                
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
