import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

const Deletepage = () => {
  const items = useSelector((state) => state.dravelReducer.items);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteItem(e.target.value));
  };
  return (
    <div>
      <h2>delete page</h2>
      <Navigation />
      {
      /* eslint-disable */
        items.map((item,index) => (
          <div key={index}>
            <p>{item.name}</p>
            <button onClick={handleDelete} value={item.name}>delete</button>
          </div>
        ))
      }
    </div>
  );
};

export default Deletepage;
