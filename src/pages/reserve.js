import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addreservation } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

const Reserve = () => {
  const user = useSelector((state) => state.dravelReducer.user);
  const items = useSelector((state) => state.dravelReducer.items);

  const date = useRef();
  const city = useRef();
  const [item, setItem] = useState('');

  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addreservation({
      user,
      itemName: item,
      date: date.current.value,
      city: city.current.value,
    }));
    setItem('');
  };
  return (
    <>
      <div className="delete-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="delete-content">
          <h1 className="p-4 text-center">Reserve now</h1>
          <form onSubmit={handleAdd}>
            <input type="text" ref={city} />
            <input type="date" ref={date} />
            <select value={item} onChange={(e) => setItem(e.target.value)}>
              {
                /* eslint-disable */
                items.map((item,index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))
              }
              </select>
              <button className="cta" type="submit">
                <span className="fa fa-cog p-2" aria-hidden="true" />
                Add item
              </button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Reserve;
