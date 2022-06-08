/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from '../components/splash/login';

function Splash() {
  return (
    <>
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Dravel</h1>
            <p className="lead">Discover while you Travel.</p>
            <p className="lead">
              <a href="#" className="btn btn-md btn-block btn-warning">
                <Login />
              </a>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                Copyright &copy;
                {' '}
                <a href="https://getbootstrap.com/">Dravel</a>
                , by
                {' '}
                <a href="https://twitter.com/mdo">@dravel</a>
                .
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Splash;
