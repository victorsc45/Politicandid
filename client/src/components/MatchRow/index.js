import React from "react";
import "./index.css";

export default function MatchRow(props) {

    const {candidate, office, body, level, name, username} = props.match;


    return (
        <div className="match-row" username={username}>
        <div className="match-name">{name}</div>
        {candidate ? (
            <div className="match-candidate">
                <p>{office}</p>
                <p>{body}</p>
                <p>{level}</p>
                </div>
        ): (
            <></>
        )}
        </div>
    )

}

