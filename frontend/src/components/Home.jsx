import { Outlet } from 'react-router-dom';

import './Home.css';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Home;