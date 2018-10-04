import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

// ReactDOM.render(<App />, document.getElementById('navbar'));
ReactDOM.hydrate(<App />, document.getElementById('navbar'));
