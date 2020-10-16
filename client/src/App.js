import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar';

import Home from './pages/home';
import MatchesPage from './pages/matches';
import Login from './pages/login';
import Signup from './pages/signUp';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import API from './utils/API'


const App = () => {
  const history = useHistory();
  // const data = API.getLoginUser();
  // let voterData = [];
  const [voterData, setVoterData] = useState([]);

  // console.log(voterData);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    API.getVoters()
      .then(res => {
        setVoterData(res.data)
      });
    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        history.push('/login');
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      <Navbar />
      <ul>
        <li> {voterData[0] ? voterData[0].name : "none"} </li>
        <li> {voterData[0] ? voterData[0].state : "none"} </li>
      </ul>
      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
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
  );
};



export default App;
