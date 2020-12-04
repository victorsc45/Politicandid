// import required dependencies and styling
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./index.css";
import voter from '../../components/video/voter.mp4';
import { useSpring, animated } from 'react-spring';
import PcComponent from '../../components/FadeIn/index';

// function for sign up page 
const SignUp = () => {
  // declare useHistory from react-router-dom
  const history = useHistory();
  // declare variables for the animation of politicandid logo
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 })
  const props1 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 })
  // getter and setter for useState signup credentials
  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });
  // event handler for event target name accepting both username and password
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpCreds({ ...signUpCreds, [name]: value });
  };
  // event handler for submit  user credentials 
  const handleSubmit = (event) => {
    event.preventDefault();
    // axios post api update of new user signup then return back to login page
    axios
      .post('/api/users', {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // return animation of politicandid logo and sets a video for background
  // input by user of email validated on view as email. Password on change sent to event handler and setState
  return (
    <div id="signup-container">
      <div id="animation">
        <animated.div style={props}><PcComponent /></animated.div>
        {/* video complements of videezy.com */}
        {/* <div class="videezyStyling"> Free B-Roll by <a href="http://videezy.com">Videezy</a></div> */}
        <div id="signup-container">
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
            <source src={voter} type="video/mp4" />
          </video>
          <div id="loginId">
            <animated.div style={props1}>
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
                  value={signUpCreds.username}
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
                  value={signUpCreds.password}
                  onChange={handleChange}
                />
                <button className="signupBtn btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
                  Sign Up
            </button>
              </form>
            </animated.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
