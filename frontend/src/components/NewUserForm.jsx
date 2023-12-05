import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createUser } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';
import './NewUserForm.css';

const NewUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(state => !!state.session.currentUserId);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createUser({ username, password })).catch(msg => {
      // console.log(msg);
      setErrors(msg);
    })
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Username' 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type='submit' value={'Create User'} />
      </form>
      {Object.values(errors).map((err, idx) => (
        <p key={idx}>{err}</p>
      ))}
    </>
  )
};

export default NewUserForm;