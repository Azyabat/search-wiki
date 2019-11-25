import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RenderComponent from './components/RenderComponent';
import MainStore from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['searchResult']
}

const persistedReducer = persistReducer(persistConfig, MainStore);

let store = createStore(persistedReducer);
let persistor = persistStore(store);



ReactDOM.render(<RenderComponent store={store} persistor={persistor}/>, document.getElementById('root'));

serviceWorker.unregister();
