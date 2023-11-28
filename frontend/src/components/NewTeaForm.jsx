import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTea } from '../store/teaReducer';
import './NewTeaForm.css';

const NewTeaForm = () => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const tea = {
      price,
      flavor,
      description
    };

    dispatch(createTea(tea));
    setFlavor('');
    setPrice('');
    setDescription('');
  };

  return (
    <form className='tea-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Flavor'
        value={flavor}
        onChange={e => setFlavor(e.target.value)}
        required
      />
      <input
        type="number"
        min={0}
        step={.01}
        placeholder='Price'
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder='Description (optional)'
        value={description}
        onChange={e => setDescription(e.target.value)}
        cols="30"
        rows="10"
      />
      <input type='submit' value={'Create Tea'} />
    </form>
  );
};

export default NewTeaForm;