import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token?.replace(/['"]+/g, '');
      console.log("Token nah thakle tor khubor ase",token);

      if (token) {
        // headers.set("Authorization", `Bearer ${token}`);
        headers.set('authorization', `${token}`)
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const { } = baseApi;
