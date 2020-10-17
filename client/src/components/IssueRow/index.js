import React from 'react'
import Slider from "../Slider/index";
import Switch from "../Switch/index";
import "./index.css";

function IssueRow(props) {
    const {issue, stance, important} = props.issue;
    return <div className="issue-row">
        <h6 className="issue-name">{issue}</h6>
         <Slider className="issue-stance" stance={stance} />
         <Switch className="issue-important" important={important}/>
    </div>
}

export default IssueRow;