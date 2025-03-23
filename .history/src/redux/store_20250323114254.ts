import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import authReducer from "./features/auth/authSlice";

// redux-persist configuration
const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  auth: persistedAuthReducer, // ✅ Fixed: Changed authApi to auth
});

// Configure store
export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"], // ✅ Only ignore persist actions
        },
      }).concat(productsApi.middleware),
  });

  console.log("Redux Store:", store.getState()); // ✅ Debugging log
  return store;
};

// Create store and persistor
export const store = makeStore();
export const persistor = persistStore(store); // ✅ Added persistStore

// TypeScript types for Redux store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
