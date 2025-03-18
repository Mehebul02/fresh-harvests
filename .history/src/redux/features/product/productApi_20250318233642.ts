import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        logetgin:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
