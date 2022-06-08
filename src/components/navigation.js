import '../scss/nav.scss';

function Navigation() {
  return (
    <div className="menu-container">
      <div className="logo">Dravel</div>
      <ul className="menu">
        <li>Destinations</li>
        <li>Trips</li>
        <li>Reserve</li>
      </ul>
    </div>
  );
}

export default Navigation;
