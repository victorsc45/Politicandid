// import react components and action file variables
import React, { createContext, useContext, useReducer } from 'react';
import { LOGIN, LOGOUT, SET_USER, UNSET_USER, UPDATE_ALL_DATA, UPDATE_USER_DATA, UPDATE_ISSUES_DATA, UPDATE_CANDIDATE_DATA, UPDATE_MATCHES_DATA, UPDATE_CURRENT_MATCH } from './actions';
// create StoreContext from React and deconstruct to Provider
const StoreContext = createContext();
const { Provider } = StoreContext;
// reducer state and action type  
const reducer = (state, action) => {
  switch (action.type) {
    // use login action
    case LOGIN:
    // use logout action return state set loading to true
    case LOGOUT:
      console.log("Reducer - Login/Logout", action);
      return {
        ...state,
        loading: true,
      };
    // set user data, issue data, and candidate data to current state 
    case SET_USER:
      console.log("Reducer - Set User", action);
      return {
        ...state,
        user: action.user,
        loading: false,
        userData: action.userData,
        issuesData: action.issuesData,
        candidateData: action.candidateData
      };
    // unset user data and remove user, issue, matches, current match and candidate data
    case UNSET_USER:
      console.log("Reducer - Unset User", action);
      return {
        ...state,
        user: null,
        loading: false,
        userData: null,
        issuesData: null,
        candidateData: null,
        matchesData: null,
        currentMatch: null
      };

    // action type update all user type data 
    case UPDATE_ALL_DATA:
      console.log("Reducer - Update All Data", action);
      return {
        ...state,
        user: action.user,
        loading: false,
        userData: action.userData,
        issuesData: action.issuesData,
        candidateData: action.candidateData,
        matchesData: action.matchesData,
        currentMatch: action.currentMatch
      };
    // set state update user data
    case UPDATE_USER_DATA:
      console.log("Reducer - Update User Data", action);
      return {
        ...state,
        userData: action.userData
      };
    // set state update issues data
    case UPDATE_ISSUES_DATA:
      console.log("Reducer - Update Issues Data:", action);
      return {
        ...state,
        issuesData: action.issuesData
      };
    // set state update candidate data
    case UPDATE_CANDIDATE_DATA:
      console.log("Reducer - Update User Candidate Data:", action);
      return {
        ...state,
        candidateData: action.candidateData
      };
    // set state and update matches data
    case UPDATE_MATCHES_DATA:
      console.log("Reducer - Update User Matches Data:", action);
      return {
        ...state,
        matchesData: action.matchesData
      };
    // set state and update current match data
    case UPDATE_CURRENT_MATCH:
      console.log("Reducer - Update Current Match Data:", action);
      return {
        ...state,
        currentMatch: action.currentMatch
      };
    // return state
    default:
      console.log("Reducer - Default, Return State:", action)
      return state;
  }
};
// declare all data values from props
// use reducer to on dispatch to this Store 
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: false,
    userData: null,
    issuesData: null,
    candidateData: null,
    matchesData: null,
    currentMatch: null
  });
  // return state by provider with value and return props
  return <Provider value={[state, dispatch]} {...props} />;
};
// function useStoreContext returns store context
const useStoreContext = () => {
  return useContext(StoreContext);
};
// exports store provider and use store context
export { StoreProvider, useStoreContext };
