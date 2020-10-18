import React, { useRef } from 'react';
import Switch from '@material-ui/core/Switch';
import "./index.css";
import axios from "axios";
import { useStoreContext } from '../../store/store';
// import { SET_USER_SWITCH } from '../../store/actions';


export default function BooleanSwitch(props) {
  // const { userId, issue } = props;
  // console.log("switchprop", userId);
  // const importantRef = useRef();
  // const [checkedState, setcheckedState] = React.useState({});

  // const [state, dispatch] = useStoreContext();
  // const handleChange = (event) => {
  //   console.log(event.target)
  //   setcheckedState({ ...checkedState, [event.target.name]: event.target.checked })
  //   axios.put(`/api/users/${props.userId}`, { checkedState, issue })
  //     .then(result => {
  //       console.log("checkedState", checkedState)
  //       console.log("RESULT SWITCH", result)
  //       dispatch({
  //         type: SET_USER_SWITCH,
  //         user: result.data
  //       });
  //     })
  //     .catch(err => console.log(err));

  // };
  return (
    <h4>Switch</h4>
    // <div className="issue-important">
    //   <div className="issue-important-range">
    //     <p>No</p>
    //     <p>Yes</p>
    //   </div>
    //   <Switch
    //     onChange={userId => handleChange(userId)}
    //     //checked={props.important}
    //     checked={checkedState.checkedA}
    //     ref={importantRef}
    //     color="default"
    //     name="checkedA"
    //     inputProps={{ 'aria-label': 'checkbox with default color' }}
    //   />
    // </div>
  );
};