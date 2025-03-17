import { baseApi } from "@/redux/api/baseApi"


const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        register:builder.mutation({
            
        })
        
    }),
})


export const {useLoginMutation} = authApi