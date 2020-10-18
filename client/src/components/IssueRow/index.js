import React from 'react'
import Slider from "../Slider/index";
import Switch from "../Switch/index";
import "./index.css";

function IssueRow(props) {
    console.log("important issuerow", props);
    const { issue, stance, important } = props.issueData;
    return <div className="issue-row">
        <h6 className="issue-name">{issue}</h6>
        <Slider className="issue-stance" stance={stance} />
        <Switch className="issue-important" important={important} userId={props.userId} issue={issue} />
    </div>
}

export default IssueRow;