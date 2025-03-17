import { baseApi } from "@/redux/api/baseApi"
import { register } from "module"


const authApi =baseApi.injectEndpoints({
    endpoints: (builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo
            }),
        }),
        register
        
    }),
})


export const {useLoginMutation} = authApi