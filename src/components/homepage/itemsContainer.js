import { useSelector } from 'react-redux';

function ItemsContainer() {
  const items = useSelector((state) => state.dravelReducer.items);
  return (
    <div>
      {
      /* eslint-disable */
        items.map((item,index) => (
          <div key={index} >
            {item.name}
          </div>
        ))
      }
    </div>
  );
}

export default ItemsContainer;
