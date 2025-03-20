import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./features/product/productApi";
import cartReducer from "./features/cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// redux-persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // শুধু cart persist হবে
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: persistedCartReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(productsApi.middleware),
  });

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
