import React from 'react'
import "./index.css";

export default function IssueTab(props) {
    console.log("issue tab props:", props)
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