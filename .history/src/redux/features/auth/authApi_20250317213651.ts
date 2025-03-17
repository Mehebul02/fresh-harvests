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
        // register:builder.mutation({
        //     query:(userInfo)=>({
        //         url:'/users/register',
        //         method:"POST",
        //         body:userInfo
        //     })
        // })
        
//     }),
// })


// export const {useLoginMutation,useRegisterMutation} = authApi


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1' }),
//   endpoints: (build) => ({
//    getUsers:build.query({
//     query:()=>'/users'
//    }),
//    registerUser: build.mutation({
//     query: (userData) => ({
//       url: "https://api-fresh-harvest.code-commando.com/api/v1/users/register",
//       method: "POST",
//       body: userData,
//     }),
//   }),
//    login: build.mutation({
//     query: (userData) => ({
//       url: "https://api-fresh-harvest.code-commando.com/api/v1/auth/login",
//       method: "POST",
//       body: userData,
//     }),
//   }),
//   }),
// })

// export const { useGetUsersQuery,useRegisterUserMutation ,useLoginMutation} = baseApi