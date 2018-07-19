import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';


import {BrowserRouter } from 'react-router-dom'
// For user
ReactDOM.render(
 <BrowserRouter>   
    <App />
</BrowserRouter>

, document.getElementById('root'));


