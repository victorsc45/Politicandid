import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import "./index.css";
import tourists from '../../components/video/tourists.mp4'

const Login = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/login', {
        username: loginCreds.username,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("LOGIN SET USER");
          console.log("Response from Database at Login", response.data);
          dispatch({ type: SET_USER, user: response.data.username, data: response.data.data });
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('login error: ');
        console.log(error);
      });
  };

  return (
    <div>
      <div className="videezyStyling"> Free B-Roll by <a href="http://videezy.com">Videezy</a></div>
      
      <div id="login-container">
        
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: '50%',
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
          <source src={tourists} type="video/mp4" />
        </video>
        <div className="text-center">
          <h1><span className="politi">Politi</span>
          <span className="candid">Candid</span></h1>
          <form className="form-signin">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
        </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="username"
              placeholder="Email address"
              value={loginCreds.username}
              onChange={handleChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
        </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              placeholder="Password"
              value={loginCreds.password}
              onChange={handleChange}
            />
            <button className="btn btn-lg btn-warning btn-block" type="submit" onClick={handleSubmit}>
              Login
        </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
