import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { receiveTea } from '../store/teaReducer';
import './NewTeaForm.css';

const NewTeaForm = props => {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const tea = {
      id: Math.floor(10000*Math.random()),
      flavor: flavor
    };
    dispatch(receiveTea(tea));
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