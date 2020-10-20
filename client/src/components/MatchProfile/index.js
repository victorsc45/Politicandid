import React from 'react'
import "./index.css";
import IssueTab from "../IssueTab/index";

export default function MatchProfile(props) {

    console.log("match profile props:", props.match.issues);
    const issues = props.match.issues;

    return (
        <div id="match-profile">
                <h1 id="user-name">{props.match.name}</h1>
              

                
                <div id="profile-block">
                {props.match.candidate ? (
                    <div id="profile-campaign-block">
                    <p>Office: {props.match.office}</p>
                    <p>Body: {props.match.body} </p>
                    <p>Level: {props.match.level} </p>
                    </div>
                    
                ) : (<></>)}

                    <div id="profile-info-block">
                    <p>City: {props.match.city}</p>
                    <p>County: {props.match.county} </p>
                    <p>State: {props.match.state} </p>
                    <p>Country: {props.match.country} </p>
                    </div>

                    <h5>Issues</h5>
                    <div id="profile-issue-block">
                   {issues ? (issues.map(issue => {
                       return <IssueTab issue={issue} />
                   })): <></>}
                    </div>
                </div>
                


        
        </div>


    );
}