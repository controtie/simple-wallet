import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Load root App component into DOM here
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

