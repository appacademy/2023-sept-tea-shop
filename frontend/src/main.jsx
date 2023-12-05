import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import { restoreSession } from './utils/csrf';
import { receiveTeaInfo, receiveTeas, removeTea, updateTea } from './store/teaReducer';
import { createUser } from './store/userReducer';
import { loginUser, logoutUser } from './store/sessionReducer';
import App from './App';
import './index.css';

console.log('welcome to the magic tea shop!');


const initializeApp = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState;
  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      },
      session: {
        currentUserId: currentUser.id
      }
    }
  }

  const store = configureStore(initialState);
  
  // Testing Purposes Only
  window.store = store;
  window.receiveTeaInfo = receiveTeaInfo;
  window.receiveTeas = receiveTeas;
  window.updateTea = updateTea;
  window.removeTea = removeTea;
  window.createUser = createUser;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  //

  ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    // </React.StrictMode>
  );  
};

restoreSession().then(initializeApp);