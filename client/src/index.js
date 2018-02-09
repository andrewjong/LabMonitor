import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Overview from './components/Overview';

ReactDOM.render(<App overview={Overview}/>, document.getElementById('root'));
registerServiceWorker();
