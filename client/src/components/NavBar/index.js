import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';

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
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mr-auto">
      <div>
      

      </div>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {state.user ? (
            <>
              <ul class="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="btn home btn-link text-primary">
                    <span className="text-warning">Home</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/matchespage" className="btn matches btn-link text-secondary ">
                    <span className="text-warning">Matches</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="#" className="btn btn-link text-secondary" onClick={logout}>
                    <span className="text-danger">Logout</span>
                  </Link>
                </li>
              </ul>
            </>
          ) : (
              <>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active mr-auto">
                    <Link to="/login" className="btn btn-link text-secondary ml-auto">
                      <span className="text-warning mr-auto"> Login</span>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/signup" className="btn btn-link ml-auto">
                      <span className="text-warning">Sign up</span>
                    </Link>
                  </li>
                </ul>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
