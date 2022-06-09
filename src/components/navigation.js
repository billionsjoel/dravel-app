import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/reservation">
        reservation
      </Link>
      <Link to="/add">
        Add item
      </Link>
      <Link to="/delete">
        delete item
      </Link>
    </div>
  );
}

export default Navigation;
