"use client";

import { AppStore, makeStore } from "@/redux/store";
import React, { useRef, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);
  const [hydrated, setHydrated] = useState(false);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // সার্ভার সাইডে কিছু রেন্ডার হবে না, হাইড্রেশনের পর হবে
  }

  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
