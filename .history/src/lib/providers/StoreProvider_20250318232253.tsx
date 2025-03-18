'use client'
import { makeStore } from '@/redux/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

const Providers = ({children}:{children:React.ReactNode}) => {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
       
        storeRef.current = makeStore()
      }
    return (
        <Provider store={makeStore()}>
            {children}
        </Provider>
    );
};

export default Providers;