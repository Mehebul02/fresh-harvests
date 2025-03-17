import { configureStore } from '@reduxjs/toolkit';
// import baseApi from './features/baseApi';
import authReducer from './features/auth/authSlice';
import { baseApi } from './api/baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;