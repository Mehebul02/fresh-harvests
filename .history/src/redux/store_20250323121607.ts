import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage

// redux-persist configuration
const persistConfig = {
  key: "root", 
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer,auth:auth 
});

// Configure store
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, 
      }).concat(productsApi.middleware),
  });
};

// Create persistor
export const store = makeStore();


// TypeScript types for Redux store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];