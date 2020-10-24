import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import "./index.css";

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace('/login');
        }
      })
      .catch((error) => {
        console.log('Logout error');
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-custom" id="navbarNav">
        <ul className="navbar-nav">
          {state.user ? (
            <>
              <li className="nav-item active">
                <Link to="/" className="btn btn-link text-primary ">
                  <span className="text-custom">Home</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/matchespage" className="btn btn-link text-secondary">
                  <span className="text-custom">Matches</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="#" className="btn btn-link text-secondary" onClick={logout}>
                  <span className="text-custom">Logout</span>
                </Link>
              </li>
            </>
          ) : (
              <>
                <li className="nav-item active">
                  <Link to="/login" className="btn btn-link text-secondary ">
                    <span className="text-custom"> Login</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/signup" className="btn btn-link ">
                    <span className="text-custom">Sign up</span>
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
