import Socials from '../homepage/socials';
import '../../scss/item.scss';

function Item() {
  return (
    <div className="item-container">
      <img
        src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2432&q=80"
        alt=""
        height={500}
        width={500}
      />
      <div className="image-title">Discovery One</div>
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        voluptatum veritatis accusamus! Beatae eum, quam sit reiciendis, quos
        voluptates fugiat voluptas totam eos quibusdam aspernatur minima,
        quisquam saepe eius inventore!
      </div>
      <Socials />
    </div>
  );
}

export default Item;
