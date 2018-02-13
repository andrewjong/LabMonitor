/**
 * Render file for website
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Overview from './components/Overview';
import Download from './components/Download';
import Nodes from './components/Nodes';

ReactDOM.render(<App overview={Overview} download={Download} nodes={Nodes} />, document.getElementById('root'));
registerServiceWorker();
