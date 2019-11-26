import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RenderComponent from './components/RenderComponent';

ReactDOM.render(<RenderComponent />, document.getElementById('root'));

serviceWorker.unregister();
