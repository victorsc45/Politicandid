import React from 'react';
import Switch from '@material-ui/core/Switch';
import "./index.css";

export default function BooleanSwitch(props) {
  return (
    <div className="issue-important">
      <div className="issue-important-range">
        <p>No</p>
        <p>Yes</p>
      </div>
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}