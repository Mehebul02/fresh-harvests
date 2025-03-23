import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import { persistReducer,  } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import authReducer from './features/auth/authSlice';  // Import authSlice reducer correctly

// redux-persist configuration
const persistConfig = {
  key: "root", 
  storage,
};

// Persist cartReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer, 
  auth: authReducer,  // Use authReducer here
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


// export const persistor = persistStore(store)
