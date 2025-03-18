import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getPro:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
