'use client'
import { AppStore, makeStore } from '@/redux/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({children}:{children:React.ReactNode}) => {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
       
        storeRef.current = makeStore()
      }
    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor}>
        </Provider>
    );
};

export default StoreProvider;