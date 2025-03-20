import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
const persistConfig = {
  key: "cart",
  storage,
};
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer
});

// Configure store
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Required for redux-persist
      }).concat(productsApi.middleware),
  });
};

// Create persistor
export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
