// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store"; // Redux Store থেকে State Access

// const getBaseUrl = () => {
//   return process.env.NEXT_PUBLIC_API_BASE_URL || "https://api-fresh-harvest.code-commando.com/api/v1";
// };

// const baseQuery = fetchBaseQuery({
//   baseUrl: getBaseUrl(),
//   credentials: "include", // Ensure cookies are included
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token; // Redux Store থেকে Token নিন

//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }

//     return headers;
//   },
// });

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQuery,
//   endpoints: () => ({}),
// });

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1' }),
  endpoints: (build) => ({
   getUsers:build.query({
    query:()=>'/users'
   }),
   registerUser: build.mutation({
    query: (userData) => ({
      url: "https://api-fresh-harvest.code-commando.com/api/v1/users/register",
      method: "POST",
      body: userData,
    }),
  }),
   login: build.mutation({
    query: (userData) => ({
      url: "https://api-fresh-harvest.code-commando.com/api/v1/auth/login",
      method: "POST",
      body: userData,
    }),
  }),
  }),
})

export const { useGetUsersQuery,useRegisterUserMutation ,useLoginMutation} = baseApi