import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Create the base API
export const baseApi = createApi({
  reducerPath: "baseApi", // Unique key for the reducer
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1", // Base URL for all requests
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from the Redux state
      const token = (getState() as RootState).auth.token;

      // If the token exists, set the Authorization header
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Initialize with empty endpoints (to be extended later)
});

// Export the base API (you can inject endpoints later)
export const { } = baseApi;