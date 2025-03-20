import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistedCartReducer from "./features/cart/cartSlice"; // The persisted reducer

// redux-persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer, // Adding persisted cart reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, // Use persisted reducer
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Required for redux-persist
      }).concat(productsApi.middleware),
  });
};

// Create persistor
export const store = makeStore();
export const persistor = persistStore(store);
