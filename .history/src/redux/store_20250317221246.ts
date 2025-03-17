import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi'; // যেখান থেকে তোমার baseApi আসছে
import authReducer from './features/auth/authSlice'; // তোমার authReducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer, // baseApi reducer যোগ করো
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // baseApi middleware যোগ করো
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
