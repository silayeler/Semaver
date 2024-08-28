// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom' yerine 'react-dom/client' içe aktarın
import { Provider } from 'react-redux';
import store from './store'; // Güncellenmiş store'u içe aktar
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
