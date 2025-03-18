import {  createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';
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
  tagTypes: ['semester', 'courses'],
  endpoints: () => ({}),
});
