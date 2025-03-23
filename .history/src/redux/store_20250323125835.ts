import { authReducer } from '.';
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
//   auth: authReducer,  
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


import { configureStore } from '@reduxjs/toolkit';


import { persistStore, persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { baseApi } from './api/baseApi';
import 

const persistConfig = {
  key: 'auth',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const makeStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({serializableCheck:{
      ignoredActions:[PERSIST,
        REHYDRATE,
        FLUSH,
        PAUSE,
        PURGE,
        REGISTER]
    }}).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof makeStore.dispatch;


export const persistor = persistStore(makeStore)