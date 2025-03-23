import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/auth/profile", // This will automatically use the token from prepareHeaders
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;