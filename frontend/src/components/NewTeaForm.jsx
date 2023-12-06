import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTea } from '../store/teaReducer';
import './NewTeaForm.css';

const NewTeaForm = () => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photoFile, setPhotoFile] = useState(null);

  const handleFile = e => {
    const file = e.currentTarget.files[0];
    setPhotoFile(file);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const tea = new FormData();
    tea.append('tea[price]', price);
    tea.append('tea[flavor]', flavor);
    tea.append('tea[description]', description);
    if (photoFile) {
      tea.append('tea[photo]', photoFile);
    }

    dispatch(createTea(tea));
    setFlavor('');
    setPrice('');
    setDescription('');
    setPhotoFile(null);
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
      <input
        type='file'
        // value={photoFile}
        onChange={handleFile}
      />
      <input type='submit' value={'Create Tea'} />
    </form>
  );
};

export default NewTeaForm;