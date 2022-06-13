import Item from '../details/item';
import '../../scss/items.scss';

function ItemsConainer() {
  return (
    <>
      <div className="items-container">
        <div className="items-heading">
          <h1 data-testid="app-title">LATEST DISCOVERIES</h1>
          <p>Please select a discovery</p>
        </div>
        <div className="items">
          <div className="images">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsConainer;
