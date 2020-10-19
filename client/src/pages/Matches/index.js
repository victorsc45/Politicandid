// import axios from "axios";
import React, { Component } from "react";
import "./index.css"
import API from "../../utils/API";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import MatchRow from "../../components/MatchRow/index";
import { useStoreContext } from '../../store/store';
import axios from "axios";
import { UPDATE_MATCHES_DATA } from '../../store/actions';

const MatchesPage = () => {
  const data = API.getFakeMatches();
  console.log("Matches Page Data", data);
  const [state, dispatch] = useStoreContext();


  axios.get("api/users/get_matches", {username: state.user}).then(response => {
    console.log("Matches Raw Data", response);
    
    const other_users = response.data;
    let current_user_issues = state.issuesData;


    let match_data = other_users.map(other_user => {
      let userScore = 0;

      other_user.issues.forEach(issue => {
       userScore += issueScore(issue, current_user_issues);
      })

      
      return {name: other_user.name, username: other_user.username, score: Math.floor(userScore), candidate: other_user.candidate}
    }
    )

    const sorted_data = match_data.sort((a,b) => {
      return b.score-a.score;
    })

    console.log(sorted_data);

    // dispatch({type: UPDATE_MATCHES_DATA, matchesData: sorted_data});

  })

  function issueScore(currentIssue, list) {
    let score = 0;
    list.forEach(issue => {

      let matchP = currentIssue.stance;
      let userP = issue.stance;
      let square = userP * matchP

        if(issue.issue === currentIssue.issue) {
          

          if (square > 0) {
            score = 20 - Math.sqrt(Math.abs(userP * userP - userP * matchP));
          } else if (square < 0) {
            score = -1 * Math.sqrt(Math.abs(userP * userP - userP * matchP));
          } else if (square === 0) {
            score = -1 * Math.abs(userP - matchP);
          }

          if (currentIssue.important === issue.important) {
            score = score * 2;
          }
        }
    })

    return score;
  } 

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
