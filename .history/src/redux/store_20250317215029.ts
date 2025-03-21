import { configureStore } from '@reduxjs/toolkit';
// import baseApi from './features/baseApi';
import authReducer from './features/auth/authSlice';
import { baseApi } from './api/baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;