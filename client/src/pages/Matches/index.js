// import axios from "axios";
import React, { Component } from "react";
import "./index.css"
import API from "../../utils/API";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import MatchRow from "../../components/MatchRow/index";

const MatchesPage = () => {
  const data = API.getFakeMatches();
  console.log("Matches Page Data", data);

  const candidate_matches = data.filter(match => match.candidate);
  const user_matches = data.filter(match => !match.candidate)
  

  return (
    <div id="big-container">
        <div className="matches-container">
          <h2>Candidates</h2>
          <div className="list-container">
            {candidate_matches.map(candidate => {
              return <MatchRow match={candidate} />
            })}
          </div>
        </div>
        <br />
        <div className="matches-container">
          <h2>Users</h2>
          <div className="list-container">
          {user_matches.map(candidate => {
              return <MatchRow match={candidate} />
            })}
          </div>
        </div>
    </div>

  );
};
export default MatchesPage;
