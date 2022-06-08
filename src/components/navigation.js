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
      <div className="socials fixed-bottom">
        <ul>
          <li>
            <i className="fa fa-twitter" aria-hidden="true" />
          </li>
          <li>
            <i className="fa fa-facebook" aria-hidden="true" />
          </li>
          <li>
            <i className="fa fa-youtube-play" aria-hidden="true" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
