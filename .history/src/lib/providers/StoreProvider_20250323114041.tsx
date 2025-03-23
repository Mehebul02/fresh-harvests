'use client'
import { AppStore, makeStore,  } from "@/redux/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);

  // Initialize the store only once
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
//  const parsistedStore = persistStore(storeRef.current)
  return (
    <Provider store={storeRef.current}>
     < PersistGate loading={null} persistor={persistor}></PersistGate>
        {children}
     
    </Provider>
  );
};

export default StoreProvider;
