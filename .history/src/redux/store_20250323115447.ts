import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import authReducer from './features/auth/authSlice'
// redux-persist configuration
const persistConfig = {
  key: "auth", 
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer, auth:
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


// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { productsApi } from "./features/product/productApi";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Local storage
// import authReducer from "./features/auth/authSlice";

// // Redux-persist configuration for `auth`
// const persistConfig = {
//   key: "auth", // Unique key for auth persistence
//   storage,
// };

// // Persisted authReducer
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// // Combine reducers
// const rootReducer = combineReducers({
//   [productsApi.reducerPath]: productsApi.reducer,
//   auth: persistedAuthReducer, // Persisted auth state
// });

// // Configure store
// export const makeStore = () => {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: ["persist/PERSIST"], // Only ignore persist actions
//         },
//       }).concat(productsApi.middleware),
//   });

//   console.log("Redux Store:", store.getState()); // Debugging log
//   return store;
// };

// // Create persistor
// export const store = makeStore();
// export const persistor = persistStore(store); // Create persist store

// // TypeScript types for Redux store
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
