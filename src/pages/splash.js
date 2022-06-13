/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from '../components/splash/login';

function Splash() {
  return (
    <>
      <div className="cover">
        <div className="nav">
          <div className="logo">
            <span className="fa fa-bars"> </span>
            <span data-testid="app-title">Dravel</span>
          </div>
          <div className="search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="content">
          <div className="heading">Dravel</div>
          <div className="cta">
            <span className="fa fa-cog p-2" aria-hidden="true" />
            <Login />
          </div>
        </div>
        <div className="footer fixed-bottom mb-4">
          &copy; Copyright Dravel 2022
        </div>
      </div>
    </>
  );
}

export default Splash;
