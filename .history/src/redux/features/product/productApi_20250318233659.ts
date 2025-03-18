import { baseApi } from "../auth/authApi"

const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProduct:builder.query({
            query:(serInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        
        
    }),
})


export const {useLoginMutation,} = authApi
