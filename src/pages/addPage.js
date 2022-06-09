import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

function AddPage() {
  const item = useRef();
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addItem(item.current.value));
    item.current.value = '';
  };
  return (
    <div>
      <h2>addPage</h2>
      <Navigation />
      <form onSubmit={handleAdd}>
        <input type="text" ref={item} />
        <button className="cta" type="submit">
          <span className="fa fa-cog p-2" aria-hidden="true" />
          Add item
        </button>
      </form>
    </div>
  );
}

export default AddPage;
