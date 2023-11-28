import { useDispatch, useSelector } from 'react-redux';
import './TeaIndex.css';
import { useEffect } from 'react';
import { receiveTeas, removeTea, selectTeas } from '../store/teaReducer';
import { destroyTea } from '../store/teaReducer';
const TeaIndex = () => {
  const dispatch = useDispatch();
  const teas = useSelector(selectTeas);

  useEffect(() => {
    // fetch data from backend and then add data to store
    const teas = { 1: { id: 1, flavor: 'green' }, 2: { id: 2, flavor: 'black ' } };
    dispatch(receiveTeas(teas))
  }, [dispatch]);

  return (
    <>
      <h2>Teas in Stock</h2>
      <ul>
        {Object.values(teas).map(tea => (
          <li key={tea.id}>
            {tea.flavor}
            <button onClick={() => dispatch(destroyTea(tea.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeaIndex;