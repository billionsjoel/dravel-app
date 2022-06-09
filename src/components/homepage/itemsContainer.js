import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemsContainer() {
  const items = useSelector((state) => state.dravelReducer.items);
  return (
    <div>
      {
      /* eslint-disable */
        items.map((item,index) => (
          <Link key={index} to="/details">
            {item.name}
          </Link>
        ))
      }
    </div>
  );
}

export default ItemsContainer;
