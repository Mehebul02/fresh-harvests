import { baseApi } from "@/redux/api/baseApi"
import { userInfo } from "os"


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
            query:(userInfo)
        })
        
    }),
})


export const {useLoginMutation} = authApi