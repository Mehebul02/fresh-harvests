'use client'
import { AppStore, makeStore, persistor } from '@/redux/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({children}:{children:React.ReactNode}) => {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
       
        storeRef.current = makeStore()
      }
    return (<
        <Provider store={storeRef.current}>
            <PersistGate  persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;