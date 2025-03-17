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
            query:(userInfo)=>({
                url:'/users/register',
                method:"POST",
                body:userInfo
            })
        })
        
    }),
})


export const {useLoginMutation,use} = authApi