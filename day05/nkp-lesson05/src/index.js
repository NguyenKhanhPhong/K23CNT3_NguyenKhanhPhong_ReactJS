import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NkpApp from './NkpApp';

const nkpRoot = ReactDOM.createRoot(document.getElementById('nkpRoot'));
nkpRoot.render(
  <React.StrictMode>
    <NkpApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
