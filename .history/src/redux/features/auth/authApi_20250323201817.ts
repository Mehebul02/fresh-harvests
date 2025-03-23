import { baseApi } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

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
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      // ✅ Redux থেকে টোকেন পাঠানোর জন্য 'headers' ব্যবহার করা হয়েছে
      providesTags: ["User"],
      extraOptions: {
        headers: (getState: () => RootState) => {
          const token = getState().auth.token; // Redux state থেকে টোকেন
          console.log("Token from Redux:", token);
          return {
            Authorization: token ? `Bearer ${token}` : "", // যদি টোকেন থাকে, তাহলে সেট করুন
          };
        },
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetCurrentUserQuery } = authApi;
