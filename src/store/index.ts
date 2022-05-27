import { compose, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { chatReducer, ChatsState } from './chats/reducer';
import { ProfileState, profileReducer } from './profile/slice'

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
    profile: ProfileState,
    chats: ChatsState
}

const persistConfig = {
    key: 'root',
    storage,
    blackList: []
}

const rootReducer = combineReducers<StoreState>({
    profile: profileReducer,
    chats: chatReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production' 
})

export const persistor = persistStore(store)