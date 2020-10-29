import React from 'react'
import "./index.css";
// ^import react and styling for issue tab functional component 
// export functional component issue tab and props
export default function IssueTab(props) {
    console.log("issue tab props:", props)
    // label issue tabs based on returned props issue elements
    return (
        <div className="tab-container">
            <p className="tab-issue-name">{props.issue.issue}</p>
            <div className="tab-issue-info">
                <p>Stance: {props.issue.stance}</p>
                <p>Important: {props.issue.important ? "True" : "False"}</p>
            </div>
        </div>
    );
}