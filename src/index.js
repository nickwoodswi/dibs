import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import StaticApp from './StaticApp'

ReactDOM.render(
    <BrowserRouter>
        <App />
        {/* <StaticApp /> */}
    </BrowserRouter>, 
    document.getElementById('root')
);