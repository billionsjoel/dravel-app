/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from '../components/splash/login';

function Splash() {
  return (
    <>
      <div className="cover">
        <div className="nav">
          <div className="logo">
            <i className="fa-solid fa-bars" />
            Dravel
          </div>
          <div className="search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="content">
          <Login />
        </div>
        <div className="footer">
          &copy; Copyright Dravel 2022
        </div>
      </div>
    </>
  );
}

export default Splash;
