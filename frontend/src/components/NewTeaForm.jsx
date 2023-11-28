import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTea } from '../store/teaReducer';
// import { receiveTea } from '../store/teaReducer';

import './NewTeaForm.css';

const NewTeaForm = () => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  // const [tea, setTea] = useState({flavor: "", price: 2.99})
  // const [userName, setUserName] = 
  const handleSubmit = e => {
    e.preventDefault();
    // debugger
    const tea = {
      price: 2.99,
      flavor: flavor
    };
    dispatch(createTea(tea));
    setFlavor('');
    // console.log(tea);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Flavor'
        value={flavor}
        onChange={e => setFlavor(e.target.value)}
        required
      />
      <input type='submit' value={'Create Tea'} />
    </form>
  );
};

export default NewTeaForm;