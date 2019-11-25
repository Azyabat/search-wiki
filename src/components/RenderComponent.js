import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from '../App';

function RenderComponent(props) {
    return(
<Provider store={props.store}>
    <PersistGate loading={null} persistor={props.persistor}>
        <App />
    </PersistGate>
</Provider>
    );
}

export default RenderComponent;