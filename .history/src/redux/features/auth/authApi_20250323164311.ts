export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      registerUser: builder.mutation({
        query: (data) => ({
          url: '/users/register',
          method: 'POST',
          body: data,
        }),
      }),
      loginUser: builder.mutation({
        query: (data) => ({
          url: '/auth/login',
          method: 'POST',
          body: data,
        }),
      }),
      // Add this to fetch the current user profile
      getCurrentUser: builder.query({
        query: () => ({
          url: '/auth/profile',
          method: 'GET',
        }),
      }),
    }),
  });
  
  export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useGetCurrentUserQuery, // Export the hook to use the profile
  } = authApi;
  