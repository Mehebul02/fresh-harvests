// import { baseApi } from "@/redux/api/baseApi"


// const authApi =baseApi.injectEndpoints({
//     endpoints: (builder)=>({
//         login:builder.mutation({
//             query:(userInfo)=>({
//                 url:'/auth/login',
//                 method:'POST',
//                 body:userInfo
//             }),
//         }),
//         register:builder.mutation({
//             query:(userInfo)=>({
//                 url:'/users/register',
//                 method:"POST",
//                 body:userInfo
//             })
//         })
        
//     }),
// })


// export const {useLoginMutation,useRegisterMutation} = authApi


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (build) => ({
   getBlogs:build.m({
    query:()=>'/blogs'
   })
  }),
})

export const { useGetBlogsQuery } = baseApi