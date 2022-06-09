/* eslint-disable */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addreservation } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

const Reserve = () => {
  const user = useSelector((state) => state.dravelReducer.user);
  const items = useSelector((state) => state.dravelReducer.items);

  const date = useRef();
  const city = useRef();
  const [item, setItem] = useState("");

  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(item);
    dispatch(addreservation({
      user: user,
      itemName: item,
      date: date.current.value,
      city: city.current.value,
    }));
    //item.current.value = '';
  };
  return (
    <div>
      <h2>reserve form</h2>
      <Navigation />
      <form onSubmit={handleAdd}>
        <input type="text" ref={city} />
        <input type="date" ref={date} />
        <select value={item} onChange={e => setItem(e.target.value)} >
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
  );
};

export default Reserve;
