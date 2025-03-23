import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import authReducer from "./features/auth/authSlice";

// ✅ Redux Persist Configuration
const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// ✅ Combine Reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  auth: persistedAuthReducer, // ✅ Corrected name
});

// ✅ Configure Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // ✅ Ignore persist actions
      },
    }).concat(productsApi.middleware), // ✅ Ensure API middleware is added
});

// ✅ Create Persistor
export const persistor = persistStore(store);

// ✅ TypeScript Types for Redux (If using TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
