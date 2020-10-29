import React from 'react'
import "./index.css";
// import component issuetab and css for react functional component match profile
import IssueTab from "../IssueTab/index";
// export functional component MatchProfile and props
export default function MatchProfile(props) {
    // declare issues as props matching issues
    console.log("match profile props:", props.match.issues);
    const issues = props.match.issues;
    // use props to match profile using ternary operator 
    return (
        <div id="matches-profile-page">
            <h1 id="user-name">{props.match.name}</h1>
            <div id="match-profile">

                <div id="profile-info-row">
                    <div id="profile-block">
                        {props.match.candidate ? (
                            <div id="profile-campaign-block">
                                <p>Office: {props.match.office}</p>
                                <p>Body: {props.match.body} </p>
                                <p>Level: {props.match.level} </p>
                            </div>

                        ) : (<></>)}
                        {/* if not a candidate then show the profile props */}
                        <div id="profile-info-block">
                            <p>City: {props.match.city}</p>
                            <p>County: {props.match.county} </p>
                            <p>State: {props.match.state} </p>
                            <p>Country: {props.match.country} </p>
                        </div>
                    </div>
                </div>
                {/* use a ternary operator then map over issues and return issues tab issue */}
                <div id="profile-issues-row">
                    {/* <h5>Issues</h5> */}
                    <div id="profile-issue-block">
                        {issues ? (issues.map(issue => {
                            return <IssueTab issue={issue} />
                        })) : <></>}
                    </div>
                </div>
            </div>

        </div>


    );
}