/* eslint-disable */
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../redux/dravelStore/dravelStore';
import Item from '../details/item';
import '../../scss/items.scss';
/* eslint-disable */
function ItemsConainer() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.dravelReducer.items);
  const token = useSelector((state) => state.dravelReducer.user);
  useEffect(() => {
    axios.get('https://dravel-api.herokuapp.com/trips')
    .then(function (response) {
      if (response.status === 200) {
        console.log(response.data);
        dispatch(fetchItems(response.data));
      }

    }).catch(function (error) {
      console.log(error)
    });

  }, []);
  return (
    <>
      <div className="items-container">
        <div className="items-heading">
          <h1>LATEST DISCOVERIES</h1>
          <p>Please select a discovery</p>
        </div>
        <div className="items">
          <div className="images">
            {
            /* eslint-disable */
              items.map((item) => (
                <Link key={item.id} to="/details" state={{ item }}>
                  <Item item={item}/>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsConainer;
