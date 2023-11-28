import { Outlet } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <>
      <h1>Magic Tea Shop</h1>
      <Outlet />
    </>
  )
};

export default Home;