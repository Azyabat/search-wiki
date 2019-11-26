import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../App';
import MainStore from '../store/Reducers';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function RenderComponent() {
    const persistConfig = {
        key: 'root',
        storage,
        blacklist: ['searchResult']
    }

    const persistedReducer = persistReducer(persistConfig, MainStore);

    let store = createStore(persistedReducer);
    let persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

export default RenderComponent;