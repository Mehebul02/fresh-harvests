'use client'



import UserProvider from '@/context/UserContext';
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <UserProvider>
              
              
             
            <Provider store={store}>
            {children}
        </Provider>
        </PersistGate>
        </UserProvider>
    );
};

export default Providers;