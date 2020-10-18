import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";


export default function VoterInfoBlock(props) {
    return (
        <Card>
            <CardContent>

                <h1 id="user-name">{props.userData.name}</h1>
                <div id="location-block">
                    <h4>City: {props.userData.city}</h4>
                    <h4>County: {props.userData.county} </h4>
                    <h4>State: {props.userData.state} </h4>
                    <h4>Country: {props.userData.country} </h4>
                </div>
                <div id="campaign-block">
                    <button id="voter-button">Voter</button>
                    <br />
                    <button id="campaign-button">Start Campaign</button>
                </div>
            </CardContent>

        </Card>);
}