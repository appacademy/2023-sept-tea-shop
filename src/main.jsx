import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import configureStore from './store/store';
import { receiveTea, receiveTeas, removeTea, updateTea } from './store/teaReducer';


console.log('welcome to the magic tea shop!');

const store = configureStore();

// Testing Purposes Only
window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.updateTea = updateTea;
window.removeTea = removeTea;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

