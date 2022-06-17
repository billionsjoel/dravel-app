/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from 'react';
import axios from 'axios';
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

  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(`${userName.current.value}@admin.com`)
    axios.post('https://dravel-api.herokuapp.com/users',
    {
      "user": {
          email:`${userName.current.value}@admin.com`,
          user_name:`${userName.current.value}`,
          password:`${userName.current.value}1234`
      }
    })
    .then(function (response) {
      if (response.status === 200) {
        console.log(response)
        dispatch(loginUser(response.headers.authorization));
        userName.current.value=''
      }

    })
    .catch(function (error) {
      console.log(error)
    });
  }

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
           <form onSubmit={handleSubmit2} className="form">
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
