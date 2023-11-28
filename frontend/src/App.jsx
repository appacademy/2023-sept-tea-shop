import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import TeaIndex from "./components/TeaIndex";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <TeaIndex />
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