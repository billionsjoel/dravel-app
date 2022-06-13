import Socials from '../homepage/socials';
import '../../scss/item.scss';
/* eslint-disable */
function Item({ item }) {
  return (
    <>
      <div className="image">
        <img
          src={item.img}
          alt=""
          height={500}
          width={500}
        />
        <div className="image-title">{item.name}</div>
        <div className="description">
          {item.des}
        </div>
        <Socials />
      </div>
    </>
  );
}

export default Item;
