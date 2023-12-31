import React from 'react';
import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';



ReactDOM.render(
  <BrowserRouter>
          <App />
  </BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
