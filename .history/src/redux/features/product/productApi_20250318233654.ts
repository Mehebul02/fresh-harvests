import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.qu({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
