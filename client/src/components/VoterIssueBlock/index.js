import React from 'react';
import "./index.css";
import IssueRow from "../IssueRow/index";
import IssueHeader from "../../components/IssueHeader";
import IssueAdd from "../../components/IssueAdd";
import Card from "@material-ui/core/Card";


function VoterValuesBlock(props) {
    console.log("VoterValuesBlock Props:", props)

    return (
        <Card>
            <div id="issues-container">
                <h1>Issues</h1>
                <div id="issues-grid">
                    <IssueHeader />
                    {props.issues.issues.map(issue => {
                        return <IssueRow key={issue.issue} issue={issue} userId={props.issues._id} />
                    })}
                    <IssueAdd />
                </div>
            </div>
        </Card>
    );
}

export default VoterValuesBlock;