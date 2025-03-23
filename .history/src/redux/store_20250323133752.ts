import { configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"], // শুধু token & user সংরক্ষণ করবো
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: persistedAuthReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
