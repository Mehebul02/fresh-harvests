import { baseApi } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store"; // Ensure the path to store is correct

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/profile", // This will automatically use the token from prepareHeaders
    }),
      
    
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetCurrentUserQuery } = authApi;
