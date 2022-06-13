import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../details/item';
import '../../scss/items.scss';

function ItemsConainer() {
  const items = useSelector((state) => state.dravelReducer.items);
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
              items.map((item,index) => (
                <Link key={index} to="/details">
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
