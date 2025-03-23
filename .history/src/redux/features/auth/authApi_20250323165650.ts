import { baseApi } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getCurrentUser: builder.query({
      query: (_, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth.token; // Get token from Redux

        console.log("Sending Token in API:", token); // Debugging

        return {
          url: "/auth/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetCurrentUserQuery,
} = authApi;
