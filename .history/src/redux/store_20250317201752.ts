
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'

import { baseApi } from './api/baseApi'
import {
    persistStore, persistReducer,
    PERSIST,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PURGE,
    REGISTER
} from 'redux-persist'

import storage from "redux-persist/es/storage";
const persistConfig = {
    key: 'auth',
    storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST, REHYDRATE,
                    FLUSH,
                    PAUSE,
                    PURGE,
                    REGISTER]
            }
        }).concat(baseApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export const persistor = persistStore(store)
