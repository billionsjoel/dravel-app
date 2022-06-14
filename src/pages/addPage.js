import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';
import '../scss/addPage.scss';

function AddPage() {
  const item = useRef();
  const des = useRef();
  const image = useRef();
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        name: item.current.value,
        img: image.current.value,
        des: des.current.value,
      }),
    );
    item.current.value = '';
    image.current.value = '';
    des.current.value = '';
  };
  return (
    <div className="add-item-container">
      <div className="add-item-nav">
        <Navigation />
      </div>
      <div className="add-item-form">
        <form onSubmit={handleAdd} className="add-form form form-control">
          <input type="text" ref={item} placeholder="item name" className="form-control" />
          <input type="text" ref={des} placeholder="des" className="form-control" />
          <input type="text" ref={image} placeholder="img_url" className="form-control" />
          <button className="btn btn-primary btn-block" type="submit">
            <span className="fa fa-cog p-2" aria-hidden="true" />
            Add item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPage;
