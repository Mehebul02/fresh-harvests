
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1",
    prepareHeaders: (headers) => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const {  } = baseApi;
