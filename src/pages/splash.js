/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from '../components/splash/login';

function Splash() {
  return (
    <>
      <div className="cover">
        <div className="nav">
          <div className="logo">
            <span className="fa-solid fa-bars"> </span>
            <span>Dravel</span>
          </div>
          <div className="search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="content">
          <div className="heading">Dravel</div>
          <div className="cta">
            <i className="fa-solid fa-gear" />
            <Login />
          </div>
        </div>
        <div className="footer">&copy; Copyright Dravel 2022</div>
      </div>
    </>
  );
}

export default Splash;
