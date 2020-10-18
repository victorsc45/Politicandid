import React, { useRef } from 'react';
import Switch from '@material-ui/core/Switch';
import "./index.css";
import axios from "axios";
import { useStoreContext } from '../../store/store';
import { UPDATE_ISSUES_DATA } from '../../store/actions';
// import { SET_USER_SWITCH } from '../../store/actions';

export default function BooleanSwitch(props) {
  const { important, issueName  } = props;
  const [state, dispatch] = useStoreContext();

  const handleChange = () => {
    const current_issues = state.issuesData;
    const new_issues = current_issues.map(issue => {
      if (issue.issue === issueName) {
        issue.important = !issue.important;
        return issue
      } else {
        return issue
      }
    })

    dispatch({type: UPDATE_ISSUES_DATA, issuesData: new_issues});

  }

  return (
    <div className="issue-important">
      <div className="issue-important-range">
        <p>No</p>
        <p>Yes</p>
      </div>
      <Switch
        onChange={() => handleChange()}
        checked={important}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
};

