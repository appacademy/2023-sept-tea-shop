import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from '../store/sessionReducer';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(state => {
    const id = state.session.currentUserId;
    return state.users[id];
  });

  console.log(currentUser);

  return (
    <nav className='header'>
      <Link to={'/'}>
        <h2>Magic Tea Shop</h2>
      </Link>
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