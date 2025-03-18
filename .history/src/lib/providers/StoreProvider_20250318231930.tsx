'use client'
import React from 'react';
import { Provider } from 'react-redux';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <Provider store={make}>
            {children}
        </Provider>
    );
};

export default Providers;