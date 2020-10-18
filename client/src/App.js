import axios from 'axios';
import React, { useEffect } from 'react';
// import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import Navbar from './components/NavBar/index';
import Home from './pages/Home/index';
import MatchesPage from './pages/Matches/index';
import Login from './pages/Login/index';
import Signup from './pages/SignUp/index';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
// import { StoreProvider } from './store/store';
// import API from './utils/API'
import PcComponent from './components/FadeIn/PcComponent';
import { Spring } from 'react-spring';
import { useSpring, animated } from 'react-spring';



const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const AnimatedPc = animated(PcComponent)


  useEffect(() => {
    dispatch({ type: LOADING });
    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        console.log("APP SET USER");
        console.log("APP Response", response);
        dispatch({ type: SET_USER, user: response.data.user, data: response.data.data });
        history.push('/');
      } else {
        console.log("APP UNSET USER");
        dispatch({ type: UNSET_USER });
        history.push('/login');
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      <div>
        <Navbar />

        {state.user ? (
          <Switch>
            <Route exact path="/" >
              <Home state={state} />
            </Route>
            <Route exact path="/matchespage" component={MatchesPage} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Redirect to="/login" />
            </Switch>
          )}

      </div>
      <animated.div style={props}><PcComponent/><h1><span class="candid">Politics</span>
        <span class="politi">Simplified</span></h1></animated.div>
    </div>
  );
};



export default App;
