import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import TeaIndex from "./components/TeaIndex";
import NewUserForm from './components/NewUserForm';
import NewSessionForm from './components/NewSessionForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <TeaIndex />
      },
      {
        path: 'signup',
        element: <NewUserForm />
      },
      {
        path: 'login',
        element: <NewSessionForm />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;