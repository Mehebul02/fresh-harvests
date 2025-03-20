import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      cart:cart
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
