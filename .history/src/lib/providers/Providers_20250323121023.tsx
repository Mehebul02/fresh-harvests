'use client'



import UserProvider from '@/context/UserContext';
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <UserProvider>
              < PersistGate loading={null} persistor={persistStore}>
              
             
            <Provider store={store}>
            {children}
        </Provider>
        </UserProvider>
    );
};

export default Providers;