import React from "react";
import "./index.css";
import { useRef } from 'react';
// import required dependencies for useRef
// export functional component matchrow and  props
export default function MatchRow(props) {
    // declare useRef 
    const rowRef = useRef();
    // declare all matching props 
    let { score, candidate, office, body, level, name, username } = props.match;
    // set scoring for matching candidate and users profiles
    if (score === 0) {
        score = "?";
    }
    // onclick event handler set username from useRef and set state for matching name 
    function handleClick(event) {
        event.preventDefault();
        let username = rowRef.current.getAttribute("username");
        props.setMatchName(username);
    }
    // return ternary username onclick show score and if candidate show office and body running for
    return (
        <div className="match-row" ref={rowRef} username={username} onClick={(event) => { handleClick(event) }}>
            <div className="match-info-row">
                <div className="match-name">{name}</div>
                <div className="match-score">Score: {score}</div>
            </div>
            {candidate ? (
                <div className="match-info-row flex-between">
                    <p>{office}</p>
                    <p>{body}</p>
                </div>
            ) : (
                    <></>
                )}
        </div>
    )

}

