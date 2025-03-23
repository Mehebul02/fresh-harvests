// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { productsApi } from "./features/product/productApi";
// import cartReducer from "./features/cart/cartSlice";
// import { persistReducer,  } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Local storage
// import authReducer from './features/auth/authSlice';  // Import authSlice reducer correctly

// // redux-persist configuration
// const persistConfig = {
//   key: "root", 
//   storage,
// };

// // Persist cartReducer
// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// // Combine reducers
// const rootReducer = combineReducers({
//   [productsApi.reducerPath]: productsApi.reducer,
//   cart: persistedCartReducer, 
//   auth: authReducer,  // Use authReducer here
// });

// // Configure store
// export const makeStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false, 
//       }).concat(productsApi.middleware),
//   });
// };

// // Create persistor
// export const store = makeStore();

// // TypeScript types for Redux store
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];


// // export const persistor = persistStore(store)
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice"; 

const persistConfig = {
  key: "auth", // ✅ এখানে `auth` দিছি, কারণ শুধু `auth` persist করবো
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer, // ✅ Persisted reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Persist এর জন্য দরকার
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
