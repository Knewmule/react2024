import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
// StrictMode allows the component to be exceuted only twice and the components highlight in react dev tools
ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
<App />
</StrictMode>
);
