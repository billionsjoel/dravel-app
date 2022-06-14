/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/splash/login';
import { loginUser } from '../redux/dravelStore/dravelStore';
import '../scss/splash.scss';

function Splash() {
  /* eslint-disable */
  const userName = useRef();
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setShowForm(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userName.current.value));
    userName.current.value =''
  };
  return (
    <>
      <div className="cover">
        <div className="nav">
          <div className="logo">
            {/*<span className="fa fa-bars"> </span>*/}
            <span>Dravel</span>
          </div>
          <div className="search">
            <i className="fa fa-search" aria-hidden="true" />
          </div>
        </div>
        <div className="content">
          <div className="heading">Dravel</div>
          {!showForm ? <button className="cta" onClick={handleClick}>
            <span className="fa fa-cog p-2" aria-hidden="true" />
            <Login />
          </button>
           :
           <form onSubmit={handleSubmit} className="form">
             <input type="text" ref={userName} />
             <button className="cta" type="submit">
               <span className="fa fa-cog p-2" aria-hidden="true" />
               <Login />
             </button>
           </form>
         }
        </div>
        <div className="footer fixed-bottom mb-4">&copy; Copyright Dravel 2022</div>
      </div>
    </>
  );
}

export default Splash;
