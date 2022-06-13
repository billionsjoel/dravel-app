import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

function AddPage() {
  const item = useRef();
  const des = useRef();
  const image = useRef();
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addItem({
      name: item.current.value,
      img: image.current.value,
      des: des.current.value,
    }));
    item.current.value = '';
    image.current.value = '';
    des.current.value = '';
  };
  return (
    <div>
      <Navigation />
      <form onSubmit={handleAdd}>
        <input type="text" ref={item} placeholder="item name" />
        <input type="text" ref={des} placeholder="des" />
        <input type="text" ref={image} placeholder="img_url" />
        <button className="cta" type="submit">
          <span className="fa fa-cog p-2" aria-hidden="true" />
          Add item
        </button>
      </form>
    </div>
  );
}

export default AddPage;
