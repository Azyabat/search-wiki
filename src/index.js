import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import MainStore from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['searchResult']
}

const persistedReducer = persistReducer(persistConfig, MainStore);



let store = createStore(persistedReducer);
let persistor = persistStore(store);
store.subscribe(() => { console.log(store.getState()) });

export const SetResultWiki = (profile) => {
    return { type: 'RESULT_WIKI', payload: profile };
};
export const AddChosen = (element) => {
    return { type: 'ADD_CHOSEN', payload: element };
};
export const DelChosen = (element) => {
    return { type: 'DEL_CHOSEN', payload: element };
};


ReactDOM.render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
