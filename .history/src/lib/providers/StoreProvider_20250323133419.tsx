'use client'
import { AppStore, makeStore,  } from "@/redux/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";


const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (

    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>

        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
