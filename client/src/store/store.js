import React, { createContext, useContext, useReducer } from 'react';
import { LOGIN, LOGOUT, SET_USER, UNSET_USER, SET_USER_SWITCH } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      console.log("ACTION-LOGOUT/LOGIN");
      return {
        ...state,
        loading: true,
      };
    // case UPDATE_USER:
    //   console.log("UPDATE")
    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
        data: action.data
      };
    case SET_USER_SWITCH:
      console.log("ACTION-SET_SWITCH USER");
      console.log(action)

      return {
        ...state,
        data: action.user
      };
    // case UPDATE_ISSUES:
    //   console.log("ISSUES UPDATES")
    //   console.log(action)

    //   return {
    //     ...state,
    //     data.
    //   }

    case UNSET_USER:
      console.log("ACTION-UNSET USER");
      return {
        ...state,
        user: null,
        loading: false,
        data: null
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: false,
    data: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
