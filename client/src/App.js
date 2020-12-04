// import required dependencies
import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
//import Navbar from './components/NavBar/index';
import Home from './pages/Home/index';
import MatchesPage from './pages/Matches/index';
import Login from './pages/Login/index';
import Signup from './pages/SignUp/index';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import Navbar from './components/NavBar';

// create App function
const App = () => {
  // declare history for redirect routes
  const history = useHistory();
  // declare state and dispatch for context use in store file
  const [state, dispatch] = useStoreContext();
  // use effect react component used for axios api call for user data
  useEffect(() => {
    dispatch({ type: LOADING });
    axios.get('/api/users').then((response) => {
      // conditional statement if there is user data 
      if (response.data.user) {
        // console.log("APP SET USER");
        // console.log("Response from Database on UseEffect from App Component", response);
        // dispatch by action to store file username, user data issue data and candidate data
        dispatch({
          type: SET_USER,
          user: response.data.username,
          userData: response.data.userData,
          issuesData: response.data.issuesData,
          candidateData: response.data.candidateData,
        });
        //history redirect to home page 
        history.push('/');
        // when condition fails fall back to login page
      } else {
        // console.log("APP UNSET USER");
        dispatch({ type: UNSET_USER });
        history.push('/login');
      }
    });
  }, [dispatch, history]);
  // return ternary operation if user state exists switch route to home show matches path 
  // or return to login signup - redirected to login
  return (
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
  );
};



export default App;
