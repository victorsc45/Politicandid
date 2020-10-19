// import axios from "axios";
import React, { Component } from "react";
import "./index.css"
import API from "../../utils/API";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";

const MatchesPage = () => {
  const data = API.getFakeMatches();
  console.log("Matches Page Data", data);


  

  return (
    <div id="big-container">
      <h1>Matches Page</h1>
      
        <div class="matches-container">
          <h2>Candidates</h2>
          <div class="list-container">
              <div class="match-row">
                   <p>Mitchell Underwood</p>
                   <p>id</p> 
              </div>
          </div>
          </div> 
        <div class="matches-container">
        <h2>Users</h2>
        <div class="list-container">
              <div class="match-row">
                   <p>Luke Evans</p>
                   <p>id</p> 
              </div>
          </div>
          </div> 
    </div>

  );
};
export default MatchesPage;
