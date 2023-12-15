import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from '../store/sessionReducer';
import './Header.css';
import { useState } from 'react';
import { fetchTeas } from '../store/teaReducer';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const currentUser = useSelector(state => {
    const id = state.session.currentUserId;
    return state.users[id];
  });

  const handleSearch = e => {
    e.preventDefault();
    dispatch(fetchTeas(search))
    setSearch('');
  };

  return (
    <nav className='header'>
      <Link to={'/'}>
        <h2>Magic Tea Shop</h2>
      </Link>
      <div>
        <form onSubmit={handleSearch}>
          <input 
            type='text' 
            value={search} 
            onChange={e => setSearch(e.target.value)}
            required
          />
          <input type='submit' value={'Search'} />
        </form>
      </div>
      <div className='session-info'>
        {currentUser ? (
          <>
            <h4>Hello {currentUser.username}</h4>
            <button onClick={() => dispatch(logoutUser(currentUser.id))}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/login')}>Sign In</button>
          </>
        )}
      </div>
    </nav>
  )
};

export default Header;