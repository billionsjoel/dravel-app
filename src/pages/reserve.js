import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addreservation } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';
import '../scss/reserve.scss';

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
      <div className="reserve-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="reserve-content">
          <h1 className="p-4 text-center">Reserve now</h1>
          <form onSubmit={handleAdd} className="form">
            <input type="text" ref={city} className="form-control" />
            <input type="date" ref={date} className="form-control" />
            <select value={item} onChange={(e) => setItem(e.target.value)} className="form-control">
              {
                /* eslint-disable */
                items.map((item,index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))
              }
              </select>
              <button className="cta btn btn-primary btn-block" type="submit">
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
