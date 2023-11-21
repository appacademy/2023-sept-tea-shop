import { useDispatch, useSelector } from 'react-redux';
import './TeaIndex.css';
import { useEffect } from 'react';
import { receiveTeas, removeTea, selectTeas } from '../store/teaReducer';

const TeaIndex = props => {
  const dispatch = useDispatch();
  const teas = useSelector(selectTeas);

  useEffect(() => {
    // fetch data from backend and then add data to store
    dispatch(receiveTeas({1: { id: 1, flavor: 'green'}, 2: { id: 2, flavor: 'black '}}))
  }, []);

  return (
    <>
      <h2>TeaIndex</h2>
      <ul>
        {Object.values(teas).map(tea => (
          <li key={tea.id}>
            {tea.flavor}
            <button onClick={() => dispatch(removeTea(tea.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeaIndex;