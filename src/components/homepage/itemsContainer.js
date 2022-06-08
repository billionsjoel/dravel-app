import Item from '../details/item';

function ItemsConainer() {
  return (
    <>
      <div className="items-container">
        <div className="item-heading">
          <h1>LATEST DISCOVERIES</h1>
          <p>Please select a discovery</p>
        </div>
        <div className="items">
          <div className="images">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsConainer;
