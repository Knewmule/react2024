import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/index.js';
import './index.css';
import App from './App';

const id = document.getElementById('root');
const root = createRoot(id);
root.render( 
<Provider store={store}>
    <App />
</Provider>,id
    );
