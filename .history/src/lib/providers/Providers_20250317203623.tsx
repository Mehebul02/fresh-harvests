'use client'

import React from 'react';
import { Provider } from 'react-redux';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <Provider store={s}>
            {children}
        </Provider>
    );
};

export default Providers;