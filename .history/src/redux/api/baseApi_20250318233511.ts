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
