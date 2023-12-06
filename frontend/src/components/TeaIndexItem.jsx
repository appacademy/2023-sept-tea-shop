import { useDispatch } from 'react-redux';

import { fetchTea, destroyTea } from '../store/teaReducer';
import './TeaIndexItem.css';

const TeaIndexItem = ({ tea, selectedTea, setSelectedTea }) => {
  const dispatch = useDispatch();

  const handleClick = tea => e => {
    e.stopPropagation();
    if (selectedTea !== tea.id) {
      dispatch(fetchTea(tea.id));
      setSelectedTea(tea.id);
    } else {
      setSelectedTea(null);
    }
  };

  const handleDelete = tea => e => {
    e.stopPropagation();
    dispatch(destroyTea(tea.id));
  };

  return (
    <li className='tea-item' key={tea.id} onClick={handleClick(tea)}>
      <div>
        <span className='tea-detail'>{tea.flavor}</span>
        <span className='tea-detail'>${tea.price}</span>
        {selectedTea === tea.id && (
          <>
            <img className='tea-photo' src={tea.photoUrl}></img>
            <div>{tea.description}</div>
          </>
        )}
      </div>
      <button onClick={handleDelete(tea)}>Delete</button>
    </li>
  )
};

export default TeaIndexItem;