import { configureStore } from '@reduxjs/toolkit';
import baseApi from './features/baseApi';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    baseApi,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;