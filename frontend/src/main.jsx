import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import { receiveTeaInfo, receiveTeas, removeTea, updateTea } from './store/teaReducer';
import App from './App';
import './index.css';

console.log('welcome to the magic tea shop!');

const store = configureStore();

// Testing Purposes Only
window.store = store;
window.receiveTeaInfo = receiveTeaInfo;
window.receiveTeas = receiveTeas;
window.updateTea = updateTea;
window.removeTea = removeTea;
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);