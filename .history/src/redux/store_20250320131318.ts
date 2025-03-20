import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistReducer({ key: "cart", storage }, cartReducer), // Persist cart only
});

// Configure store with persisted reducer
export const makestore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(productsApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
