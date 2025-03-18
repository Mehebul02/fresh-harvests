import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/auth/login',
                method:'POST',
                body:
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
