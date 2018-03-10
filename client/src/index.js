/**
 * Render file for website
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Download from './components/Download';
import Nodes from './components/Nodes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));
registerServiceWorker();
