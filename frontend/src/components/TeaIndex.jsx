import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTeas, selectTeasArray } from '../store/teaReducer';
import TeaIndexItem from './TeaIndexItem';
import NewTeaForm from './NewTeaForm';
import './TeaIndex.css';

const TeaIndex = () => {
  const dispatch = useDispatch();
  const teas = useSelector(selectTeasArray);
  console.log('rendering...', teas);

  const [selectedTea, setSelectedTea] = useState(null);

  useEffect(() => {
    dispatch(fetchTeas());
  }, [dispatch]);

  return (
    <>
      <h2>Teas in Stock</h2>
      <ul>
        {teas.map(tea => (
          <TeaIndexItem 
            key={tea.id}
            tea={tea} 
            selectedTea={selectedTea} 
            setSelectedTea={setSelectedTea} 
          />
        ))}
      <NewTeaForm />
      </ul>
    </>
  );
};

export default TeaIndex;