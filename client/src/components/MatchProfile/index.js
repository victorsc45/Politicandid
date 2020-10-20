import React from 'react'
import "./index.css";

export default function MatchProfile(props) {

    
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
                </div>
                {/* <h1>Issues</h1>
                <div id="location-block">
                    <p>City: {props.userData.city}</p>
                    <p>County: {props.userData.county} </p>
                    <p>State: {props.userData.state} </p>
                    <p>Country: {props.userData.country} </p>
                </div> */}


        
        </div>


    );
}