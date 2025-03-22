import {  createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api-fresh-harvest.code-commando.com/api/v1';
};

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  credentials: 'include',
  prepareHeaders: (headers) => {
    return headers;
  }
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  // tagTypes: ['semester', 'courses'],
  endpoints: () => ({}),
});

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