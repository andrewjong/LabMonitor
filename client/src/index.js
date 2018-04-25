import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nodes from './components/Nodes';
import { BrowserRouter } from 'react-router-dom';

/**
 * Render file for website
 */
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));
registerServiceWorker();
