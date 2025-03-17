import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { toast } from "sonner";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1", // সঠিক URL
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;
    
    if (token) {
      headers.set("authorization", `Bearer ${token}`); // Bearer token সঠিকভাবে সেট করা হচ্ছে
    }
    return headers;
  }
});

const baseQueryWithLogout: typeof baseQuery = async (args, api, extraOptions) => {
  try {
    const result = await baseQuery(args, api, extraOptions);
    
    // যদি 401 আসে, তাহলে ইউজারকে লগ আউট করানো
    if (result?.error?.status === 401) {
      toast.error("Session expired! Please log in again.");
      api.dispatch(logout());
    }

    // যদি অন্য কোনো ত্রুটি আসে, সেই ত্রুটির বিস্তারিত দেখতে
    if (result?.error) {
      toast.error(`Error: ${result.error.message}`);
      console.error(result.error);
    }
    
    return result;
  } catch (error) {
    console.error("Network error or server issue:", error);
    toast.error("Network or server issue occurred!");
    return { error: { status: 'FETCH_ERROR', message: "Failed to fetch" } };
  }
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
