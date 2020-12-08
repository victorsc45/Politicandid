import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import "./index.css";


// functional component navbar exported
const Navbar = () => {
  // declare react state and dispatch for store file
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  // // logout event and unset user data
  const logout = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('Logout error');
      });
  };
  // use react router dom and Link to display navbar links
  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse navbar-custom" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {state.user ? (
            <>
              <li className="nav-item active">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-custom nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/matchespage" className="btn btn-link text-secondary">
                  <span className="text-custom nav-link">Matches</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/" className="btn btn-link text-secondary" onClick={logout}>
                  <span className="text-custom nav-link">Logout</span>
                </Link>
              </li>
            </>
          ) : (
              <>
                <li className="nav-item active">
                  <Link to="/login" className="btn btn-link text-secondary ">
                    <span className="text-custom nav-link"> Login</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/signup" className="btn btn-link ">
                    <span className="text-custom nav-link">Sign up</span>
                  </Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
