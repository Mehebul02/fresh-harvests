import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/auth/login',
                method:'POST',
                
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
