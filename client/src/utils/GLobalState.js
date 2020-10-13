import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_VOTERS,
    REMOVE_VOTER,
    UPDATE_VOTER,
    ADD_VOTER,
    ADD_CANDIDATE,
    UPDATE_CANDIDATE,
    REMOVE_CANDIDATE,
    LOADING
} from "../store/actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_VOTERS:
            return {
                ...state,
                currentVoter: action.type,
                loading: false
            };

        case UPDATE_VOTER:
            return {
                ...state,
                voter: [...action.voter],
                loading: false
            };

        case ADD_VOTER:
            return {
                ...state,
                voter: [action.voter, ...state.voter],
                loading: false
            };

        case REMOVE_VOTER:
            return {
                ...state,
                voter: state.voter.filter((voters) => {
                    return voters._id !== action._id;
                })
            };

        case ADD_CANDIDATE:
            return {
                ...state,
                voter: [action.voter, ...state.candidate],
                loading: false
            };

        case UPDATE_CANDIDATE:
            return {
                ...state,
                candidate: [...state.voter],
                loading: false
            };

        case REMOVE_CANDIDATE:
            return {
                ...state,
                candidate: state.voter.filter((voters) => {
                    return voters._id !== action._id;
                })
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const VoterProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        id: "",
        name: "",
        county: "",
        state: "",
        country: "",
        zip: "",
        issues: [],
        candidate: false,
        campaign: {
            level: "",
            body: "",
            office: "",
        }

    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { VoterProvider, useStoreContext };