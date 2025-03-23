import { baseApi } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store"; // Make sure the path to store is correct

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
      query: () => {
        // Get token from the Redux state
        const token = (state: RootState) => state.auth.token;
        
        return {
          url: '/auth/profile',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetCurrentUserQuery } = authApi;
