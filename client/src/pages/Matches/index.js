// import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import "./index.css"
import API from "../../utils/API";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import MatchRow from "../../components/MatchRow/index";
import { useStoreContext } from '../../store/store';
import axios from "axios";
import { UPDATE_MATCHES_DATA } from '../../store/actions';
import MatchProfile from "../../components/MatchProfile/index";

const MatchesPage = () => {
  // const data = API.getFakeMatches();
  let [data, setData] = useState([]);
  let [match, setMatch] = useState({});
  console.log("Matches Page Data", data);
  const [state, dispatch] = useStoreContext();

useEffect(()=> {
  axios.get("api/users/get_matches", {username: state.user}).then(response => {
    console.log("Matches Raw Data", response);
    
    const other_users = response.data;
    let current_user_issues = state.issuesData;


    let match_data = other_users.map(other_user => {
      let userScore = 0;

      other_user.issues.forEach(issue => {
       userScore += issueScore(issue, current_user_issues);
      })
      // userScore = userScore / (other_user.issues.length * 20);

      let office = null;
      let body = null;
      let level = null;
      
      if (other_user.candidate) {
        office = other_user.campaign.office;
        body = other_user.campaign.body;
        level = other_user.campaign.level;
      }
      let match_object = {name: other_user.name, username: other_user.username, score: Math.floor(userScore), candidate: other_user.candidate, office: office, body: body, level: level,
      city: other_user.city, state: other_user.state, county: other_user.county, country: other_user.country};
      
      return match_object
    }
    )

    const sorted_data = match_data.sort((a,b) => {
      return b.score-a.score;
    })

    let return_data = sorted_data.slice(1,(sorted_data.length))

    console.log("Sorted Data",sorted_data);
    setData(return_data);
    setMatch(return_data[0]);
    // dispatch({type: UPDATE_MATCHES_DATA, matchesData: sorted_data});

  })

  }, []);



  function issueScore(currentIssue, list) {
    let score = 0;
    list.forEach(issue => {

      let matchP = currentIssue.stance;
      let userP = issue.stance;
      let square = userP * matchP

        if(issue.issue === currentIssue.issue) {
          

          // if (square > 0) {
          //   score = 20 - Math.sqrt(Math.abs(userP * userP - userP * matchP));
          // } else if (square < 0) {
          //   score = -1 * Math.sqrt(Math.abs(userP * userP - userP * matchP));
          // } else if (square === 0) {
          //   score = -1 * Math.abs(userP - matchP);
          // }

          if (square > 0) {
            score = 10 - Math.abs(userP - matchP);
          } else {
            score = - Math.abs(userP - matchP);
          }

          if (currentIssue.important === issue.important) {
            score = score * 2;
          }
        }
    })

    return score;
  } 

  const setMatchName = (username) => {
    let profile = data.filter(person => person.username === username);
    console.log("Username",username);
    console.log("Profile",profile)
    setMatch(profile[0]);
  }
  

  return (
    <div id="page-container">
        <MatchProfile match={match} />
        <div id="big-container">
        <div className="matches-container">
          <h2>Candidates</h2>
          <div className="list-container">
            {data.filter(match => match.candidate).map(candidate => {
              return <MatchRow match={candidate} setMatchName={setMatchName}/>
            })}
          </div>
        </div>
        <br />
        <div className="matches-container">
          <h2>Users</h2>
          <div className="list-container">
          {data.filter(match => !match.candidate).map(candidate => {
              return <MatchRow match={candidate} setMatchName={setMatchName}/>
            })}
          </div>
        </div>
        </div>
    </div>

  );
};
export default MatchesPage;
