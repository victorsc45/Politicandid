import React from 'react';

import API from "../../utils/API";
import "./index.css";
import VoterInfoBlock from "../../components/VoterInfoBlock/index";
import VoterIssueBlock from "../../components/VoterIssueBlock/index";
import CandidateInfoBlock from "../../components/CandidateInfoBlock/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { UPDATE_ALL_DATA } from '../../store/actions';

// import { useStoreContext } from '../../store/store';
// import { StoreProvider } from "../../store/store";


const Home = (props) => {
  console.log("Home Component Props", props.state)
  // const data = API.getFakeData();

  

  return (<div id="home-container">

    <Card >
      <CardContent>
        <VoterInfoBlock userData={props.state.userData} />
      </CardContent>

      {props.state.candidateData.candidate ? (<CardContent>
        <CandidateInfoBlock candidateData={props.state.candidateData.campaign} />
      </CardContent>) : "" }
      
      <CardContent>
        <VoterIssueBlock issuesData={props.state.issuesData} />
      </CardContent>
    </Card>

  </div>)
};


export default Home;