import { baseApi } from "@/redux/api/baseApi"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body:data

            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body:data

            }),
        }),
    })
})


export const {useLoginUserMutation, useRegisterUserMutation,  } = productsApi
