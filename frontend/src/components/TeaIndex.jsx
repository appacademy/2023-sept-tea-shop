import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './TeaIndex.css';
import { fetchTeas, destroyTea, selectTeas, fetchTea } from '../store/teaReducer';

const TeaIndex = () => {
  const dispatch = useDispatch();
  const teas = useSelector(selectTeas);

  const [selectedTea, setSelectedTea] = useState();

  useEffect(() => {
    // fetch data from backend and then add data to store
    dispatch(fetchTeas());
  }, [dispatch]);

  const handleClick = tea => e => {
    e.stopPropagation();
    if (selectedTea !== tea.id) {
      dispatch(fetchTea(tea.id));
      setSelectedTea(tea.id);
    } else {
      setSelectedTea();
    }
  };

  const handleDelete = tea => e => {
    e.stopPropagation();
    dispatch(destroyTea(tea.id));
  };

  return (
    <>
      <h2>Teas in Stock</h2>
      <ul>
        {Object.values(teas).map(tea => (
          <li className='tea-item' key={tea.id} onClick={handleClick(tea)}>
            <div>
              <span className='tea-detail'>{tea.flavor}</span>
              <span className='tea-detail'>${tea.price}</span>
              {selectedTea === tea.id && (
                <div>{tea.description}</div>
              )}
            </div>
            <button onClick={handleDelete(tea)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeaIndex;