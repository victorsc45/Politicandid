import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";


export default function VoterInfoBlock(props) {
    return (
    <Card>
        <CardContent>

        <h1 id="user-name">{props.info.name}</h1>
        <div id="location-block">
            <h4>City: {props.info.city}</h4>
            <h4>County: {props.info.county} </h4>
            <h4>State: {props.info.state} </h4>
            <h4>Country: {props.info.country} </h4>
        </div>
        <div id="campaign-block">
            <button id="voter-button">Voter</button>
            <br/>
            <button id="campaign-button">Start Campaign</button>
        </div>
        </CardContent>

    </Card> );
}

