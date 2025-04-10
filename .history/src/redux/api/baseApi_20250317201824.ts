import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { toast } from 'sonner';



const baseQuery = fetchBaseQuery({
    baseUrl: 'https://bike-store-eta-six.vercel.app/api/v1',
    // baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
  
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `${token}`)
      }
      return headers;
  
    }
  })

  const baseQueryWithRefresh: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions):Promise<any> => {
    let result = await baseQuery(args, api, extraOptions)
    console.log(result);
  
  if(result?.error?.status === 404){
    toast.error("User not found")
  }
  
    if (result.error?.status === 401) {
      console.log('Sending refresh token request');
      const res = await fetch('https://bike-store-eta-six.vercel.app/api/v1/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      })
      const data = await res.json()
     if(data?.data?.accessToken){
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({
        user,
        token: data.data.accessToken
      }))
  
      result = await baseQuery(args,api,extraOptions)
     }else{
      api.dispatch(logout())
     }
    }
  return result
  }

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefresh,
  tagTypes:['semester','courses'],
    endpoints: () => ({}),
  });